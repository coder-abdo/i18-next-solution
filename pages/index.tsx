// #mui imports
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
// #next imports 
import Link from 'next/link';
// #react imports
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { useTranslation } from "react-i18next";

import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';


export default function Home() {
  const { locales,push} = useRouter()
const toggleLang = (l:string) =>{
  push('/', undefined, {locale:l})
}
  const [t] = useTranslation('common');
  return (
    <>
    {locales?.map(l => <button style={{margin: '10px'}} key={l} onClick={() =>toggleLang(l)}>{l}</button>)}
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