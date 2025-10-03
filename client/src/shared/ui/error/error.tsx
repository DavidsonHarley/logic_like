import cls from "./error.module.scss";

type ErrorProps = {
  error: string;
};

export function Error({ error }: ErrorProps) {
  return (
    <div className={cls.ctnError}>
      <div className={cls.textError}>
        <span className={cls.span}>Error:</span> {error}
      </div>
    </div>
  );
}
