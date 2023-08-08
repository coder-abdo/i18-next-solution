// #mui imports
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
// #next imports 
import Link from 'next/link';
// #react imports
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";

import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';


export default function Home() {
  const { locales} = useRouter()

  const {t} = useTranslation('common');
  return (
    <>
    {locales?.map(locale => <Link style={{padding: '1rem'}} key={locale} href={'/'} locale={locale}>{locale}</Link>)}
       <h2>{t('title')}</h2>
    </>
  )
}
export async function getStaticProps({locale}:{locale: string}){
  return {
    props:{
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}