// queries/fragments.ts

export const globalSeo = `
  "globalSeo": *[_type == "globalSeo"][0]{
    defaultTitle,
    pageLanguage,
    defaultKeywords,
    defaultDescription,
    ogImage { asset->{ url } }
  }
`;

export const pageMeta = `
pageMeta {
      title,
      keywords,
      description,
      ogImage { asset->{ url } },
      canonicalUrl,
      robots,
      ogTitle,
      ogDescription,
      twitterCard
    }
`;

export const navfragment = `
navigation->{
  title,
  navColor,
  linkColor,
  desktopLogo {
    asset->{url}
  },
  mobileLogo {
    asset->{url}
  },
  menuItems[]{
    _key,
          title,
          newTab,
          section,
          link {
            external,
            internal->{ _type, title, slug }
          }
  }
}
`;

export const footerFragment = `
  footer->{
    footerColor,
    blocks[]{
      ...,
      content[]{
        ...,
        text,
        buttons[]{
          _key,
          label,
          variant,
          newTab,
          section,
          link {
            external,
            internal->{ _type, title, slug }
          }
        },
        contactInfo {
          email,
          phone,
          address,
          socials[]{
            platform,
            url,
            email,
            phone,
            icon {
              asset->{ _id, url }
            }
          }
        }
      }
    }
  }
`;

export const blocksFragment = `
  blocks[] {
    ...,
    _type,
    blocktype,
    blockID,
    corners {
      allCorners,
      topLeft,
      topRight,
      bottomLeft,
      bottomRight
    },
    bgColor,
    textColor,
    border,
    padding,
  
    content[] {
      ...,
      buttons[]{
          _key,
          label,
          variant,
          newTab,
          section,
          link {
            external,
            internal->{ _type, title, slug }
          }
        },
       
      video { asset->{ url, mimeType } },
      image {
        asset->{
          _id,
          url,
          metadata { dimensions { aspectRatio, width, height } }
        },
        crop,
        hotspot
      }
    }
  }
`;
