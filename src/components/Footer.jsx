import { MovieCard } from '../pages/style';
import { Tail, MovieInfo } from './style'

function Footer({title, poster, imgSize, sessionInfo}){
  return(
    <Tail>
      <MovieCard imgSize={imgSize}>
        <img src={poster} alt={title} />
      </MovieCard>
      <MovieInfo>
        <p>{title}</p>
        {sessionInfo && <p>{sessionInfo}</p>}
      </MovieInfo>
    </Tail>
  );
}

export default Footer;