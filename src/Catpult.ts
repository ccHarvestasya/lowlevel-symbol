import { SslSocket } from "./SslSocket.js";

export class Catpult extends SslSocket {
  /** パケットタイプ */
  private PacketType = {
    NODE_DISCOVERY_PULL_PING: 0x111,
  };

  async conntest() {
    // ピア問合せ
    const socketData = await this.requestSocket(
      this.PacketType.NODE_DISCOVERY_PULL_PING
    );
    return socketData;
  }
}
