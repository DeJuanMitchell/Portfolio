import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        DeJuan's Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am an aspiring web developer who is eager to learn.
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;