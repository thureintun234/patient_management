
export type RouteType = {
  name: string;
  icon: JSX.Element;
  component?: React.ReactNode;
  layout: string;
  path?: string;
  showInMenu: boolean
};

export type RoutesType = RouteType & {
  collapse?: RouteType[];
};
 