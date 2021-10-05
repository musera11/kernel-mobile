import React from 'react';
import {SvgXml} from 'react-native-svg';
import add from '../../assets/svgs/add.svg';
import audio from '../../assets/svgs/audio.svg';
import card from '../../assets/svgs/card.svg';
import compass from '../../assets/svgs/compass.svg';
import tree from '../../assets/svgs/tree.svg';
import email from '../../assets/svgs/icn_mail.svg';
const svgs: any = {
  add,
  email,
  audio,
  tree,
  compass,
  card,
};

const SvgIcon = (props: any) => (
  <SvgXml xml={svgs[props.name]} fill={props.color} {...props} />
);

export default SvgIcon;
