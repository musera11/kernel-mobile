import React from 'react';
import {SvgXml} from 'react-native-svg';

const svgs: any = {
};

const SvgIcon = (props: any) => (
  <SvgXml xml={svgs[props.name]} fill={props.color} {...props} />
);

export default SvgIcon;
