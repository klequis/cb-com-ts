import { Section } from "../components/section";
import iHKNC from '../assets/logos/hknc-1.png'

export const HKNC = () => {
  return (
    <Section backgroundColor="blue">
      <h2>Hellen Keller National Center</h2>
      <h3>Coordinator Auxiliary Medical Services</h3>
      <p>
        Worked at Helen Keller part-time for 2 years and then volunteered. They
        gave me a generous title. I taught daily living skills, performed
        sign-language interpretation for doctors & patients, and a variety of
        non-glorious tasks such as medical record filing, first-aid station
        maintenance and airport transportation.
      </p>
      <img src={iHKNC} alt="Hellen Keller National Center logo" />
    </Section>
  );
};
