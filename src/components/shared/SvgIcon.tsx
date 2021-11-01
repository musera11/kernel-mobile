import React from 'react';
import {SvgXml} from 'react-native-svg';
import email from '../../assets/svgs/icn_mail.svg';
import person from '../../assets/svgs/person.svg';
import profileSettings from '../../assets/svgs/profileSettings.svg';

const svgs: any = {
  email,
  profileSettings,
  person,
};

const SvgIcon = (props: any) => (
  <SvgXml xml={svgs[props.name]} fill={props.color} {...props} />
);

export default SvgIcon;
