/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logoJPG from "assets/neha.png"

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Image src={logoJPG} alt="startup landing logo" sx={{width:"95px"}}/>
    </Link>
  );
}
