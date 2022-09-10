import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim";
// import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const ParticlesBackground = () => {
    const options = useMemo(() => {
        return {
            particles: {
                links: {
                    enable: true,
                },
                move: {
                    enable: true,
                }
            }
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);

    return <Particles init={particlesInit} options={options} />;
}

export default ParticlesBackground;