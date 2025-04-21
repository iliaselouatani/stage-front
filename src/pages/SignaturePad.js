import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { jsPDF } from "jspdf";
import forge from "node-forge";

function SignaturePad() {
  const [url, setUrl] = useState("");
  const signRef = useRef(null);

  const handleClear = () => {
    if (signRef.current) {
      signRef.current.clear();
      setUrl("");
    }
  };

  const generateKeyPair = () => {
    // إنشاء زوج مفاتيح (محاكاة للتشفير غير المتماثل)
    const rsa = forge.pki.rsa;
    return rsa.generateKeyPair({ bits: 2048 });
  };

  const createMockCertificate = (publicKey) => {
    // محاكاة شهادة X.509
    const cert = forge.pki.createCertificate();
    cert.publicKey = publicKey;
    cert.serialNumber = "01";
    cert.validity.notBefore = new Date();
    cert.validity.notAfter = new Date();
    cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1);
    
    const attrs = [
      { name: "commonName", value: "User" },
      { name: "organizationName", value: "Example Org" },
    ];
    cert.setSubject(attrs);
    cert.setIssuer(attrs); // محاكاة ذاتية التوقيع
    cert.sign(generateKeyPair().privateKey);
    
    return forge.pki.certificateToPem(cert);
  };

  const handleGenerate = (format) => {
    if (!signRef.current) return;

    const canvas = signRef.current.getCanvas();
    const dataUrl = canvas.toDataURL("image/png");

    // إنشاء زوج مفاتيح للتوقيع
    const { publicKey, privateKey } = generateKeyPair();

    // إنشاء توقيع رقمي باستخدام المفتاح الخاص
    const md = forge.md.sha256.create();
    md.update(dataUrl, "utf8");
    const digitalSignature = forge.util.encode64(privateKey.sign(md));

    // محاكاة طابع زمني (TSP)
    const timestamp = new Date().toISOString();

    // محاكاة شهادة X.509
    const certificatePem = createMockCertificate(publicKey);

    switch (format) {
      case "PNG":
        setUrl(dataUrl);
        downloadFile(dataUrl, "signature.png");
        break;

      case "XML":
        const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<Signature>
  <ImageData>${dataUrl}</ImageData>
  <DigitalSignature>${digitalSignature}</DigitalSignature>
  <Certificate>${certificatePem}</Certificate>
  <Timestamp>${timestamp}</Timestamp>
</Signature>`;
        const xmlBlob = new Blob([xmlContent], { type: "application/xml" });
        const xmlUrl = URL.createObjectURL(xmlBlob);
        downloadFile(xmlUrl, "signature.xml");
        URL.revokeObjectURL(xmlUrl);
        break;

      case "JSON":
        const jsonContent = JSON.stringify({
          signature: dataUrl,
          digitalSignature: digitalSignature,
          certificate: certificatePem,
          timestamp: timestamp,
        });
        const jsonBlob = new Blob([jsonContent], { type: "application/json" });
        const jsonUrl = URL.createObjectURL(jsonBlob);
        downloadFile(jsonUrl, "signature.json");
        URL.revokeObjectURL(jsonUrl);
        break;

      case "PDF":
        const pdf = new jsPDF();
        pdf.addImage(dataUrl, "PNG", 10, 10, 100, 50);
        pdf.text(`Digital Signature: ${digitalSignature.slice(0, 50)}...`, 10, 70);
        pdf.text(`Certificate: ${certificatePem.slice(0, 50)}...`, 10, 80);
        pdf.text(`Timestamp: ${timestamp}`, 10, 90);
        pdf.save("signature.pdf");
        break;

      default:
        break;
    }
  };

  const downloadFile = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      <div style={{ border: "2px solid black", width: 500, height: 200 }}>
        <SignatureCanvas
          ref={signRef}
          canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
        />
      </div>

      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button
          style={{ height: "30px", width: "80px" }}
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          style={{ height: "30px", width: "80px" }}
          onClick={() => handleGenerate("PNG")}
        >
          Save PNG
        </button>
        <button
          style={{ height: "30px", width: "80px" }}
          onClick={() => handleGenerate("XML")}
        >
          Save XML
        </button>
        <button
          style={{ height: "30px", width: "80px" }}
          onClick={() => handleGenerate("JSON")}
        >
          Save JSON
        </button>
        <button
          style={{ height: "30px", width: "80px" }}
          onClick={() => handleGenerate("PDF")}
        >
          Save PDF
        </button>
      </div>

      {url && (
        <div style={{ marginTop: "20px" }}>
          <img src={url} alt="Signature" style={{ border: "1px solid #ccc" }} />
        </div>
      )}
    </div>
  );
}

export default SignaturePad;