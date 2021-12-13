import React from 'react';
import {SvgXml} from 'react-native-svg';
import Logo from '../../assets/svg/slide2.svg';
import Slide2 from '../../assets/svg/slide2.svg';
import Slide3 from '../../assets/svg/slide3.svg';
import Slide4 from '../../assets/svg/slide4.svg';
import Shape from '../../assets/svg/shape.svg';

const svgs: any = {
  logo: Logo,
  slide2: Slide2,
  slide3: Slide3,
  slide4: Slide4,
  shape: Shape,
};

const SvgIcon = (props: any) => (
  <SvgXml xml={svgs[props.name]} fill={props.color} {...props} />
);

export default SvgIcon;
