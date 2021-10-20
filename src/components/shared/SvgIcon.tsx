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
import x from '../../assets/svgs/x.svg';
import hands from '../../assets/svgs/hands.svg';
import handsAndHart from '../../assets/svgs/handsAndHart.svg';
import person from '../../assets/svgs/person.svg';
import sun from '../../assets/svgs/sun.svg';
import profileSettings from '../../assets/svgs/profileSettings.svg';
import hart from '../../assets/svgs/hart.svg';
import empower from '../../assets/svgs/empower.svg';
import library from '../../assets/svgs/library.svg';
import audioWhite from '../../assets/svgs/audioWhite.svg';
import takeEthos from '../../assets/svgs/take_ethos.svg';
import myGoalsMain from '../../assets/svgs/my_goals_main.svg';
import gratitudeMain from '../../assets/svgs/gratitude_main.svg';
import tool from '../../assets/svgs/tool.svg';
import done from '../../assets/svgs/done.svg';
import arrowBack from '../../assets/svgs/arrowBack.svg';
import personPencil from '../../assets/svgs/personPencil.svg';
import blackX from '../../assets/svgs/blackX.svg';
import whiteX from '../../assets/svgs/whiteX.svg';
import bigSun from '../../assets/svgs/bigSun.svg';
import emojiScale1 from '../../assets/svgs/emoji-scale-1.svg';
import emojiScale2 from '../../assets/svgs/emoji-scale-2.svg';
import emojiScale3 from '../../assets/svgs/emoji-scale-3.svg';
import emojiScale4 from '../../assets/svgs/emoji-scale-4.svg';

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
  x,
  hands,
  handsAndHart,
  person,
  sun,
  profileSettings,
  hart,
  empower,
  library,
  audioWhite,
  takeEthos,
  myGoalsMain,
  gratitudeMain,
  personPencil,
  arrowBack,
  done,
  tool,
  blackX,
  whiteX,
  bigSun,
  emojiScale1,
  emojiScale2,
  emojiScale3,
  emojiScale4,
};

const SvgIcon = (props: any) => (
  <SvgXml xml={svgs[props.name]} fill={props.color} {...props} />
);

export default SvgIcon;
