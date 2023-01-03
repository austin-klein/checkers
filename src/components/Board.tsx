import { useState } from 'react';
import { initialBoardSetup } from '../constants';
import '../styles/index.css';

const Board = () => {
  const [board, setBoard] = useState(initialBoardSetup);
  return (
    <table>
      <tr>
        <td className="no-piece"></td>
        <td>
          <p className="red-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="red-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="red-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="red-piece"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p className="red-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="red-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="red-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="red-piece"></p>
        </td>
        <td className="no-piece"></td>
      </tr>
      <tr>
        <td className="no-piece"></td>
        <td>
          <p className="red-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="red-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="red-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="red-piece"></p>
        </td>
      </tr>
      <tr>
        <td></td>

        <td className="no-piece"></td>
        <td></td>
        <td className="no-piece"></td>
        <td></td>
        <td className="no-piece"></td>
        <td></td>
        <td className="no-piece"></td>
      </tr>
      <tr>
        <td className="no-piece"></td>
        <td></td>
        <td className="no-piece"></td>
        <td></td>
        <td className="no-piece"></td>
        <td></td>
        <td className="no-piece"></td>
        <td></td>
      </tr>
      <tr>
        <td>
          <p className="black-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="black-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="black-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="black-piece"></p>
        </td>
        <td className="no-piece"></td>
      </tr>
      <tr>
        <td className="no-piece"></td>
        <td>
          <p className="black-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="black-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="black-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="black-piece"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p className="black-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="black-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="black-piece"></p>
        </td>
        <td className="no-piece"></td>
        <td>
          <p className="black-piece"></p>
        </td>
        <td className="no-piece"></td>
      </tr>
    </table>
  );
};

export { Board };
