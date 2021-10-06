import React from 'react';
import {SvgXml} from 'react-native-svg';
import add from '../../assets/svgs/add.svg';
import audio from '../../assets/svgs/audio.svg';
import card from '../../assets/svgs/card.svg';
import compass from '../../assets/svgs/compass.svg';
import tree from '../../assets/svgs/tree.svg';
import email from '../../assets/svgs/icn_mail.svg';
import whiteBack from '../../assets/svgs/back_white.svg';
import blackBack from '../../assets/svgs/back_black.svg';
import whiteAudio from '../../assets/svgs/Audio_white.svg';
import em from '../../assets/svgs/em.svg';
const svgs: any = {
  add,
  email,
  audio,
  tree,
  compass,
  card,
  whiteBack,
  blackBack,
  em,
  whiteAudio,
};

const SvgIcon = (props: any) => (
  <SvgXml xml={svgs[props.name]} fill={props.color} {...props} />
);

export default SvgIcon;
