import React from "react";
import { ParticleWallpaper } from "src/components/Particles";
import styles from "./Layout.module.scss";
import { motion } from "framer-motion";

interface Props {}

const PortfolioLayout: React.FC<Props> = () => {
    return <ParticleWallpaper />;
};

export default PortfolioLayout;
