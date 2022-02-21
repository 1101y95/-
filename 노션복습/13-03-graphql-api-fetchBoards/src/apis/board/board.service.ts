import { Injectable } from '@nestjs/common';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  findAll(): Board[] {
    //데이터를 조회하는 로직

    return [
      {
        number: 1,
        writer: '철수',
        title: '제목입니다~~~',
        contents: '내용이에요!!!',
      },
      {
        number: 2,
        writer: '영희',
        title: '좋은 날씨입니다!',
        contents: '내용@@@@@',
      },
      {
        number: 3,
        writer: '훈이',
        title: '점심 맛있게 드셨나요?!',
        contents: '식사 하셨나요?!',
      },
      {
        number: 4,
        writer: '맹구',
        title: '안녕하세요?!',
        contents: '내용이요!!!',
      },
    ];
  }
  

  create(): string {
    //데이터를 등록하는 로직

    return '데이터 등록에 성공하였습니다';
  }
}
