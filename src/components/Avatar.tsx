import styles from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
} //usar ponto de interrogação na frente da propriedade faz dela opcional

export function Avatar({ hasBorder = true, ...props }: AvatarProps) { //colocamos desestruturação das propriedades no lugar de props e criamos valores default
 
  return (
    <img
     className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
     {...props}
    />
  );
}