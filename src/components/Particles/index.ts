import { IOptions, RecursivePartial } from 'tsparticles';
import networkOptions from './ParticleNetworks';
import starsOptions from './ParticleStars';

export { default as ParticleWallpaper } from './ParticleWallpaper';

export enum ParticleType {
    Networks,
    Stars,
}

export const getParticleOptions = (particleType: ParticleType): RecursivePartial<IOptions> => {
    switch (particleType) {
        case ParticleType.Networks:
            return networkOptions;
        case ParticleType.Stars:
            return starsOptions;
    }
};
