import { googleplayImage, appstoreImage, naverImage } from '../assets/commonImages';
import { image1, image2 } from '../assets/IndividualImages';
import { ServiceSection } from '../types/solutions';

const SOLUTION_TITLES: string[] = ['ENERGIZE', 'YOUR MOTION'];
const SOLUTION_SUB_TITLE: string = 'THE BIRTH OF INNOVATIVE SERVICES FOR ELECTRIC CARS';

const SOLUTION_MENUS: string[] = [
  '중고전기차 매매 플랫폼',
  '온라인 전기차 배터리 진단',
  '자율주행 솔루션',
  '차량 제어',
  '인공 지능',
];

const GOOGLE_PLAY = {
  image: googleplayImage,
  url: 'https://play.google.com/store/games?hl=ko&gl=US',
};
const APP_STORE = {
  image: appstoreImage,
  url: 'https://www.apple.com/kr/app-store',
};
const NAVER_SHOPPING = {
  image: naverImage,
  url: 'https://shopping.naver.com/home',
};

const SOLUTION_SERVICE_SECTIONS: ServiceSection[] = [
  {
    enTitle: 'EVOA CAR SERVICE',
    koTitle: '중고전기차 전용 매매 플랫폼',
    descriptionsTitle: null,
    descriptions: [
      '국내 최초 진단 기반 전기차 전용 중고거래를 위한 플랫폼 탄생 ',
      '지금까지 중고 전기차 거래시 가장 중요한 항목은 알 수 없는 상태로 ',
      '내연기관차 검사 기준으로 거래됨에 따라 판매자, 구매자 모두의 Pain Point 발생 ',
      '엔모션은 전기차 중고거래 가격 기준을 마련으로 안정적인 중고전기차 시장을 주도합니다. ',
      '정비소 입고 없이 OBD 단말기로 간편하게 비대면으로 진단이 가능합니다.',
    ],
    offersTitle: '비대면 진단 EVOA 진단 리포트',
    offers: [
      '배터리 진단 등급',
      'Cell Balance',
      '배터리 성능 SoH',
      '내부저항',
      '배터리 효율',
      '고장코드',
      '모터효율',
      '외 전기차 핵심부품에 대한 다양한 진단 정보 제공',
    ],
    connectedButtons: [GOOGLE_PLAY, APP_STORE],
    image: image1,
  },
  {
    enTitle: 'EVOA SERVICE',
    koTitle: '온라인 전기차 배터리 진단',
    descriptionsTitle: '구글 플레이스토어 EVOA 출시',
    descriptions: [
      'EVOA 란? ',
      '딥러닝 기반 전기차 배터리 잔존 수명 진단 개발과 오픈 플랫폼을 기반으로 ',
      '비대면 실시간 진단을 제공하는 오픈 플랫폼 입니다. ',
      '전기차의 핵심 부품인 배터리, 충전, 구동계 관련 데이터를 정비소 방문없이 ',
      'EVOA 앱과 전용 단말기 연결만으로 직접 진단할 수 있습니다.',
    ],
    offersTitle: null,
    offers: [],
    connectedButtons: [GOOGLE_PLAY, APP_STORE, NAVER_SHOPPING],
    image: image2,
  },
];

export default {
  SOLUTION_TITLES,
  SOLUTION_SUB_TITLE,
  SOLUTION_MENUS,
  SOLUTION_SERVICE_SECTIONS,
};
