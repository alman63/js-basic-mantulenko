import { createPage } from "./createPage";
// import { disableButton } from './disableButton';
import { deleteP } from "./deleteP";

describe("createPage", () => {
  it("При начальной загрузке должно быть три параграфа", () => {
    expect(createPage()).toBe(3);
  });
});

describe("deleteP", () => {
  it("Количество параграфоф всегда будет <= 5", () => {
    expect(deleteP()).toBe(true);
  });
});

// describe('disableButton', () => {
//     it('Если поле пустое,  то кнопка выключена none', () => {
//         expect(disableButton()).toBe('none');
//     });
// });
