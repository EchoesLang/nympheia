import React from 'react';
import * as BsIcons from 'react-icons/bs';
export const SidebarData = [
  {
    title: 'Home',
    path: '/nympheia',
    icon: <BsIcons.BsFillHouseDoorFill />,
    cName: 'nav-text'
  },
  {
    title: '소개',
    path: '/nympheia/introduce',
    icon: <BsIcons.BsPersonBoundingBox />,
    cName: 'nav-text'
  },
  {
    title: '사용하기',
    path: '/nympheia/using',
    icon: <BsIcons.BsFillInfoCircleFill />,
    cName: 'nav-text'
  },
  {
    title: '튜토리얼',
    path: '/nympheia/tutorial',
    icon: <BsIcons.BsEnvelopeFill />,
    cName: 'nav-text'
  },
  {
    title: '에디터',
    path: '/nympheia/editor',
    icon: <BsIcons.BsEnvelopeFill />,
    cName: 'nav-text'
  }
];