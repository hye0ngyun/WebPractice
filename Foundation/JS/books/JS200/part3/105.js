// 객체 속성 추가 못하게 만들기 (seal)
{
  const album = {
    name: "Love Yourself",
  };

  album.song = "Euphoira";
  album.singer = "RM";

  console.log(album);
  Object.seal(album);

  album.hit = 123;
  console.log(album); // hit 프로퍼티가 추가되지 않음
  album.singer = "JK";
  console.log(album); // singer가 JK로 변경(프로퍼티 변경은 가능)

  delete album.name;
  console.log(album); // 삭제 불가능
}
