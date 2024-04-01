export const CLASS_PREFIX = 'ntvc';

// Need to prefix with 'n-' to avoid conflict with existing built-in types
export const BuilderComponent = {
  DIV: {
    id: 'n-div',
    name: 'Div',
    class: `${CLASS_PREFIX}-div`
  },
  ROW: {
    id: 'n-row',
    name: 'Row',
    class: `${CLASS_PREFIX}-row`
  },
  COL: {
    id: 'n-col',
    name: 'Column',
    class: `${CLASS_PREFIX}-col`
  },
  CELL: {
    id: 'n-col',
    name: 'Column',
    class: `${CLASS_PREFIX}-cell`
  },
  TEXT: {
    id: 'n-text',
    name: 'Text',
    class: `${CLASS_PREFIX}-text`
  },
  BUTTON: {
    id: 'n-button',
    name: 'Button',
    class: `${CLASS_PREFIX}-button`
  },
  LIST: {
    id: 'n-list',
    name: 'List',
    class: `${CLASS_PREFIX}-list`
  },
  LIST_ITEM: {
    id: 'n-list-item',
    name: 'List Item',
    class: `${CLASS_PREFIX}-list-item`
  }, 
  BLOCK_QUOTE: {
    id: 'n-block-quote',
    name: 'Block Quote',
    class: `${CLASS_PREFIX}-block-quote`
  },
  CUSTOM_BLOCK: {
    id: 'n-custom-block',
    name: 'Custom Block',
    class: `${CLASS_PREFIX}-block-quote`
  },
  HEADING: {
    id: 'n-heading',
    name: 'Heading',
    class: `${CLASS_PREFIX}-heading`
  },
  FLIP_CARDS_3D:{
    id:'flip-cards-3d',
    name:'3D Flip Cards',
    class: `${CLASS_PREFIX}-flip-cards-3d`
  },
  FLIP_CARDS:{
    id:'flip-cards',
    name:'Flip Cards',
    class: `${CLASS_PREFIX}-flip-cards`
  },
  CAROUSEL:{
    id:'carousel',
    name: 'Carousel',
    class: `${CLASS_PREFIX}-carousel`
  },
  CAROUSEL_IMAGE:{
    id: 'carousel-image',
    name: 'Carousel Image',
    class: `${CLASS_PREFIX}-carousel-image`
  },
  CAROUSEL_WRAPPER:{
    id: 'carousel-wrapper',
    name: 'Carousel Wrapper',
    class: `${CLASS_PREFIX}-carousel-wrapper`
  },
  CAROUSEL_SWIPER_ITEM: {
    id: 'carousel-swiper-item',
    name: 'Carousel Swiper Item',
    class: `${CLASS_PREFIX}-carousel-swiper-item`
  },
  CAROUSEL_SWIPER_CONTAINER: {
    id: 'carousel-swiper-container',
    name: 'Carousel Swiper Container',
    class: `${CLASS_PREFIX}-carousel-swiper-container`
  },
  CAROUSEL_LEFT_BUTTON: {
    id: 'carousel-left-button',
    name: 'Carousel Left Button',
    class: `${CLASS_PREFIX}-carousel-left-button`
  },
  CAROUSEL_RIGHT_BUTTON: {
    id: 'carousel-right-button',
    name: 'Carousel Right Button',
    class: `${CLASS_PREFIX}-carousel-right-button`
  },
  SOCIAL_CARDS:{
    id:'social-cards',
    name:'Social Cards',
    class: `${CLASS_PREFIX}-social-cards`
  },
  USER_BLOCKS:{
    id:'block-adder',
    name: 'Block Adder',
    class: `${CLASS_PREFIX}-block-adder`
  },
  VIDEO:{
    id:'custom-video',
    name: 'Video',
    class: `${CLASS_PREFIX}-custom-video`
  },
  YOUTUBE:{
    id:'youtube',
    name: 'Youtube',
    class: `${CLASS_PREFIX}-youtube`
  },  
};

export const BuilderBlock = {
  DIV: {
    id: 'div',
    name: 'Div'
  },
  COLUMN: {
    id: 'column',
    name: 'Column'
  },
  TEXT: {
    id: 'text',
    name: 'Text'
  },
  BUTTON: {
    id: 'button',
    name: 'Button'
  },
  LIST: {
    id: 'list',
    name: 'List'
  },
  LIST_ITEM: {
    id: 'listItem',
    name: 'List Item'
  },
  BLOCK_QUOTE: {
    id: 'blockQuote',
    name: 'Block Quote'
  },
  CUSTOM_BLOCK: {
    id: 'customBlock',
    name: 'Custom Block'
  },
  HEADING: {
    id: 'heading',
    name: 'Heading'
  },
  IMAGE:{
    id:'image',
    name: 'Image'
  },
  FLIP_CARDS_3D:{
    id:'flip-cards-3d',
    name:'3D Flip Cards'
  },
  FLIP_CARDS:{
    id:'flip-cards',
    name:'Flip Cards'
  },
  CAROUSEL:{
    id:'carousel',
    name: 'Carousel'
  },
  SOCIAL_CARDS:{
    id:'social-cards',
    name:'Social Cards'
  },
  LINK:{
    id:'link',
    name:'Link'
  },
  VIDEO:{
    id:'custom-video',
    name: 'Video',
  },
  YOUTUBE:{
    id:'youtube',
    name: 'Youtube'
  }
};
