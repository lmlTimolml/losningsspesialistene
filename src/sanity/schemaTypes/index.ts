// ./src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from 'sanity';
import { page } from './pages/page';
import { homepage } from './pages/homepage';
import { pageMeta } from './sharedTypes/pageMeta';
import { globalSeo } from './sharedTypes/globalSeo';
import { footer } from './footer';
import { navigation } from './nav';
import { mainBlock } from './blocks/mainBlock';
import { contactInfo } from './sharedTypes/contactInfo';
import { blockContentType } from './sharedTypes/blockContent';
import { button } from './ui/button';
import { mediaBlock } from './sharedTypes/mediaBlock';
import { socialLink } from './ui/socialLink';
import { carousel } from './blocks/carousel';
/* import { categoryType } from './ui/category';
import { twoColTxtImg } from './blocks/twoColTxtImg';
import { accordion } from './blocks/accordion';
import { services } from './blocks/services';
import { service } from './ui/service';
import { casePage } from './pages/case';
import { caseCard } from './blocks/caseCard';
import { casesBlock } from './blocks/casesBlock';
import { employee } from './ui/employee';
import { employeeBlock } from './blocks/employeeBlock';
import { article } from './pages/article';
import { client } from './ui/client';
import { clientsBlock } from './blocks/clientsBlock';
import { highLight } from './ui/highlight';
import { highLightsBlock } from './blocks/highlightsBlock';
*/

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepage,
    page,
    pageMeta,
    globalSeo,
    navigation,
    footer,
    mainBlock,
    blockContentType,
    button,
    contactInfo,
    mediaBlock,
    socialLink,
    carousel,
    /* casePage,
    caseCard,
    casesBlock,
    client,
    clientsBlock,
    highLight,
    highLightsBlock,
    article,
    employee,
    employeeBlock,
    categoryType,
    twoColTxtImg,
    accordion,
    services,
    service,
     */
  ],
};
