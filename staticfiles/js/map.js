const mapContainer = document.getElementById("map"); // 지도를 표시할 div

const KoreaUniv = {
  latitude: 37.591071,
  longitude: 127.027756
};

const mapOption = {
  center: new kakao.maps.LatLng(KoreaUniv.latitude, KoreaUniv.longitude), // 지도의 중심좌표
  level: 3 // 지도의 확대 레벨
};

const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
