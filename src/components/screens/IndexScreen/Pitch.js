import React from 'react';
import styled from 'styled-components';
import { styles } from '@storybook/design-system';
import IconLearnStorybook from '../../basics/IconLearnStorybook';

const { breakpoint, color, typography } = styles;

const PitchWrapper = styled.div`
  text-align: center;
  max-width: 608px;
  margin: 0 auto;
  padding: 145px 20px 48px;
`;

const PitchTitle = styled.h1`
  color: ${color.darkest};
  font-weight: ${typography.weight.black};
  font-size: ${typography.size.l1}px;
  line-height: 38px;
  margin-top: 18px;

  @media (min-width: ${breakpoint * 1.5}px) {
    font-size: 36px;
    line-height: 44px;
  }
`;

const PitchDescription = styled.div`
  color: ${color.darkest};
  font-size: ${typography.size.m1}px;
  line-height: 32px;
  text-align: center;
  margin: 12px auto 0;
  max-width: 434px;
`;

const Pitch = () => (
  <PitchWrapper>
    <IconLearnStorybook />

    <PitchTitle>Free and Premium Templates</PitchTitle>

    <PitchDescription>
      Created for beginner and developer. Suitable in any platforms.
    </PitchDescription>
  </PitchWrapper>
);

export default Pitch;
