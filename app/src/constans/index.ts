const TUBE_LINE_COLORCODES = [
  { id: 'bakerloo', color: 'bg-color-red' },
  { id: 'central', color: 'bg-color-yellow' },
  { id: 'circle', color: 'bg-color-blue' },
  { id: 'district', color: 'bg-color-purple' },
  { id: 'hammersmith-city', color: 'bg-color-black' },
  { id: 'jubilee', color: 'bg-color-pink' },
  { id: 'metropolitan', color: 'bg-color-orange' },
  { id: 'northern', color: 'bg-color-brown' },
  { id: 'piccadilly', color: 'bg-color-turquoise' },
  { id: 'victoria', color: 'bg-color-purple' },
  { id: 'waterloo-city', color: 'bg-color-blue' }
];
const DOM_ELEMENT_IDS = {
  header_link_text: 'header_link_text',
  footer_text: 'footer_text',
  main_content: 'main_content',
  tube_list_page_title: 'tube_list_page_title',
  tube_list_wrapper: 'tube_list_wrapper',
  tube_list_block: 'tube_list_block',
  tube_list_row: 'tube_list_row',
  tube_list_button: 'tube_list_button',
  tube_status_details: 'tube_status_details'
};
const LABELS = {
  APP_TITLE: 'Tube Status',
  FOOTER_TEXT: 'All content is available under the Sample Licence',
  STATUS_PAGE_HEADING: 'Current status of all tube lines.',
  LOADING_TEXT: 'Loading Data',
  NO_DATA_FOUND: 'No Data Found.'
};

const NO_OF_LIST_ITEM_IN_CARD = 8;
export { TUBE_LINE_COLORCODES, DOM_ELEMENT_IDS, LABELS, NO_OF_LIST_ITEM_IN_CARD };
