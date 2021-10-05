import React from 'react';
import {SvgXml} from 'react-native-svg';
import add from '../../assets/svgs/add.svg';

const svgs: any = {
  add,
};

const SvgIcon = (props: any) => (
  <SvgXml xml={svgs[props.name]} fill={props.color} {...props} />
);

export default SvgIcon;
