import type { PortableTextBlock } from 'sanity';

/* UTILITY TYPES */

export interface SanityImageProps {
  image: any;
  alt?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  class?: string;
  crop?: boolean; // allow consumer to enforce crop/hotspot
}

export type Corners = {
  allCorners?: boolean;
  topLeft?: boolean;
  topRight?: boolean;
  bottomLeft?: boolean;
  bottomRight?: boolean;
};

/* COMPONENTS / BLOCKS */

export interface ModulePreviewInput {
  content?: Array<TextBlock | MediaBlock>;
  blockID: string;
  pageColor?: string;
  padding?: string;
  textColor?: string;
  bgColor?: string;
  border?: string;
  activeDotColor?: string;
  borderDotColor?: string;
}

export interface TextBlock {
  _type: 'textBlock';
  title?: string;
  text: PortableTextBlock[];
}

export interface MediaBlock {
  _type: 'mediaBlock';
  mediaType: 'image' | 'video' | 'youtube' | 'map';
  alt?: string;
  youtubeUrl?: string;
  mapEmbedUrl?: string;
  youtubeId?: string;
  image?: {
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  };
  video?: {
    _type: 'file';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  };
}

export interface BaseBlock {
  content: [TextBlock] | [MediaBlock];
}

export type CarouselItem = TextBlock | MediaBlock;

export interface CarouselBlock extends ModulePreviewInput, Corners {
  _type: 'carousel';
  carouselHeading: string;
  carouselSpeed: number;
  corners: Corners;
  slides: CarouselItem[];
}

export interface BlockStylesType {
  content?: Array<TextBlock | MediaBlock>;
  blockID: string;
  pageColor?: string;
  padding?: string;
  textColor?: string;
  bgColor?: string;
  border?: string;
  activeDotColor?: string;
  borderDotColor?: string;
}

export type ContentField = 'title' | 'text' | 'contactInfo' | 'buttons';

export interface ContentBlockOptions {
  enabledFields?: ContentField[];
}

export interface Slug {
  current: string;
}

export interface SocialLink {
  platform?: string;
  url?: string;
  email?: string;
  phone?: number;
  icon?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export interface ContactInfoProps {
  email?: string;
  phone?: string;
  address?: string;
  socials?: SocialLink[];
}

export interface MainBlock extends BaseBlock {
  _type: 'mainBlock';
}

export type PageBlocks = MainBlock | CarouselBlock;
/*   | TwoColTxtImg
  | Accordion
  | Services
  | CasesBlock
  | EmployeeBlock
  | ClientsBlock
  | HighLightsBlock
  | CarouselBlock; */

/* BUTTONS */

export interface ButtonType {
  _key?: string;
  label: string;
  section: string;
  link?: {
    external?: string;
    internal?: {
      slug?: {
        current: string;
      };
    };
  };
  variant?:
    | 'btn-primary'
    | 'btn-secondary'
    | 'btn-contrast'
    | 'btn-support'
    | 'btn-primary-outline'
    | 'btn-secondary-outline'
    | 'btn-contrast-outline'
    | 'btn-support-outline'
    | 'btn-black-outline'
    | 'btn-white-outline'
    | 'btn-black'
    | 'btn-white';
  newTab?: boolean;
}

/* META/SEO INFO */

export interface MetaType {
  title?: string;
  keywords?: string;
  description?: string;
  ogImage?: {
    asset?: {
      url: string;
    };
  };
  canonicalUrl?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export interface GlobalSeoType {
  pageLanguage: string;
  defaultTitle?: string;
  defaultKeywords?: string;
  defaultDescription?: string;
  ogImage?: {
    asset?: {
      url: string;
    };
  };
}

/* PAGES */

export interface LayoutProps {
  page?: BasePageType;
  settings?: GlobalSeoType;
}

export interface BasePageType {
  _id: string;
  title: string;
  slug: Slug;
  pageColor: string;
  blocks: PageBlocks[];
  footer: FooterType;
  navigation: NavType;
  pageMeta?: MetaType;
  globalSeo: GlobalSeoType;
}

// Alias the types so TS knows they're the same structure
export interface PageType extends BasePageType {
  _type: 'page';
}

export type StyleField =
  | 'blocktype'
  | 'blockID'
  | 'corners'
  | 'padding'
  | 'textColor'
  | 'bgColor'
  | 'border'
  | 'activeDotColor'
  | 'borderDotColor';

/* NAVIGATION & FOOTER */

export interface NavLogo {
  asset?: {
    _ref?: string;
    url?: string;
  };
}

export interface NavType {
  _type: 'navigation';
  _id: string;
  navColor?: string;
  linkColor?: string;
  desktopLogo?: NavLogo;
  mobileLogo?: NavLogo;
  menuItems?: {
    external: string;
    newTab: unknown;
    title?: string;
    section?: string;
    page?: {
      slug?: {
        current?: string;
      };
    };
  }[];
}

export interface NavlinkProps {
  title: string;
  section?: string;
  link?: {
    external?: string;
    internal?: {
      _type: string;
      slug?: {
        current: string;
      };
    };
  };
  newTab?: boolean;
  className?: string;
  activeClass?: string;
}

export interface FooterType {
  _type: 'footer';
  _id: string;
  title: string;
  footerColor?: string;
  blocks: PageBlocks[];
}
