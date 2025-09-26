import { MdHome, MdArrowBack, MdArrowForward, MdSettings } from "react-icons/md";
import {
  FaUser,
  FaUsers,
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaCheck,
  FaTimes,
  FaShoppingCart,
  FaCreditCard,
  FaBox,
  FaThumbsUp,
  FaComment,
  FaPlay,
  FaPause,
  FaStop,
  FaVolumeUp,
  FaLink,
} from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";

export const iconsData = [
  {
    title: "Navegação",
    icons: [
      { icon: <MdHome />, name: "Home", import: `import { MdHome } from "react-icons/md";` },
      { icon: <MdArrowBack />, name: "Voltar", import: `import { MdArrowBack } from "react-icons/md";` },
      { icon: <MdArrowForward />, name: "Próximo", import: `import { MdArrowForward } from "react-icons/md";` },
    ],
  },
  {
    title: "Usuário",
    icons: [
      { icon: <FaUser />, name: "Usuário", import: `import { FaUser } from "react-icons/fa";` },
      { icon: <FaUsers />, name: "Usuários", import: `import { FaUsers } from "react-icons/fa";` },
      { icon: <MdSettings />, name: "Configurações", import: `import { MdSettings } from "react-icons/md";` },
    ],
  },
  {
    title: "Ações",
    icons: [
      { icon: <FaPlus />, name: "Adicionar", import: `import { FaPlus } from "react-icons/fa";` },
      { icon: <FaEdit />, name: "Editar", import: `import { FaEdit } from "react-icons/fa";` },
      { icon: <FaTrash />, name: "Excluir", import: `import { FaTrash } from "react-icons/fa";` },
      { icon: <FaSearch />, name: "Buscar", import: `import { FaSearch } from "react-icons/fa";` },
      { icon: <FaCheck />, name: "Confirmar", import: `import { FaCheck } from "react-icons/fa";` },
      { icon: <FaTimes />, name: "Fechar", import: `import { FaTimes } from "react-icons/fa";` },
    ],
  },
  {
    title: "E-commerce",
    icons: [
      { icon: <FaShoppingCart />, name: "Carrinho", import: `import { FaShoppingCart } from "react-icons/fa";` },
      { icon: <FaCreditCard />, name: "Pagamento", import: `import { FaCreditCard } from "react-icons/fa";` },
      { icon: <FaBox />, name: "Pacote", import: `import { FaBox } from "react-icons/fa";` },
    ],
  },
  {
    title: "Social",
    icons: [
      { icon: <FaThumbsUp />, name: "Like", import: `import { FaThumbsUp } from "react-icons/fa";` },
      { icon: <BsFillHeartFill />, name: "Coração", import: `import { BsFillHeartFill } from "react-icons/bs";` },
      { icon: <FaComment />, name: "Comentário", import: `import { FaComment } from "react-icons/fa";` },
      { icon: <FaLink />, name: "Link", import: `import { FaLink } from "react-icons/fa";` },
    ],
  },
  {
    title: "Mídia",
    icons: [
      { icon: <FaPlay />, name: "Play", import: `import { FaPlay } from "react-icons/fa";` },
      { icon: <FaPause />, name: "Pause", import: `import { FaPause } from "react-icons/fa";` },
      { icon: <FaStop />, name: "Stop", import: `import { FaStop } from "react-icons/fa";` },
      { icon: <FaVolumeUp />, name: "Volume", import: `import { FaVolumeUp } from "react-icons/fa";` },
    ],
  },
];

