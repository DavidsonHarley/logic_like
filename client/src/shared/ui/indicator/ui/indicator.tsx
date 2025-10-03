import cls from './Indicator.module.scss';
import cn from 'classnames';

type VariantIndicator = 'default' | 'page';
type SizeIndicator = 'default' | 'small' | 'big';

type IndicatorProps = {
  variant?: VariantIndicator;
  size?: SizeIndicator;
};

export function Indicator({
  size = 'default',
  variant = 'default',
}: IndicatorProps) {
  const renderVariant = () => {
    switch (variant) {
      case 'page':
        return (
          <div className={cls.pageCenter}>
            <div className={cn(cls.loader, cls[`${size}`])} />
          </div>
        );
      default:
        return <div className={cn(cls.loader, cls[`${size}`])} />;
    }
  };

  return renderVariant();
}
