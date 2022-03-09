import { Row } from "../../components/common";

export default function HomePage() {
  return (
    <Row>
      <h1 style={{ color: "#DDD" }}>일대기 입니다.</h1>
    </Row>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p style={{ fontSize: 50 }}>
    //       <b>Tie</b>
    //     </p>

    //     <p style={{ fontSize: 19 }}>참여할 방 번호를 입력하세요</p>
    //     <input onChange={(e) => setRoomId(e.target.value)} />

    //     <p style={{ fontSize: 19 }}>이메일을 입력하세요</p>
    //     <input onChange={(e) => setEmail(e.target.value)} />

    //     <button style={{ margin: 8 }} onClick={enterRoom}>
    //       <div>참여하기</div>
    //     </button>
    //   </header>
    // </div>
  );
}
