export type LanguageType = {
  ext: string;
  name: string;
  mode: string;
};

export type ThemeType = {
  name: string;
  value: string;
  is_dark: boolean;
};

export type formDataType = {
  title: string;
  language: string | undefined;
  source_code: string;
  font_size: number;
  theme: string;
  visibility: undefined | number;
  pass_code: undefined | string;
  tags: string[];
};

export type AuthContextType = {
  auth: {
    name: string;
    email: string;
    token: string;
  };
  setAuth: (auth: { name: string; email: string; token: string }) => void;
};

export type RouteType = {
  path: string;
  element: () => JSX.Element;
  _protected: number; // {-1: public, 0: shouldBeLoggedOut, 1: shouldBeLoggedIn}
};

export type SnippetType = {
  uid: string;
  owner: string;
  created_at: string;
} & formDataType;