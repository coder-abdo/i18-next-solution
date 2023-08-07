// #mui imports
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
// #next imports 
import Link from 'next/link';
// #react imports
import { useTranslation } from "react-i18next";

import styles from '@/styles/Home.module.css';


export default function Home() {
  const [t, i18n] = useTranslation();
  return (
    <>
       <h2>{t('title')}</h2>
    </>
  )
}
