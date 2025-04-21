import React from 'react'
import { useParams } from 'react-router-dom'
import StagairesForm from '../Components/StagairesForm';
import OFPPTForm from '../Components/OFPPTForm';
import CommuneForm from '../Components/CommuneForm';

const Forms = () => {
    const {target} = useParams();
    console.log(target);
  return (
    <section>
      {
        target === 'stagaire' ? <StagairesForm /> : target === 'OFPPT' ?  <OFPPTForm />: <CommuneForm />
      }
    </section>
  )
}

export default Forms;
