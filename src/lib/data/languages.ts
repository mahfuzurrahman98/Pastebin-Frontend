type Language = {
  ext: string;
  name: string;
  mode: string;
};

const languages: Language[] = [
  { ext: 'angular', name: 'Angular', mode: 'javascript' },
  { ext: 'bat', name: 'Batch', mode: 'batchfile' },
  { ext: 'c', name: 'C', mode: 'c_cpp' },
  { ext: 'cobol', name: 'COBOL', mode: 'cobol' },
  { ext: 'coffee', name: 'CoffeeScript', mode: 'coffe' },
  { ext: 'cpp', name: 'C++', mode: 'c_cpp' },
  { ext: 'cs', name: 'C#', mode: 'csharp' },
  { ext: 'css', name: 'CSS', mode: 'css' },
  { ext: 'dart', name: 'Dart', mode: 'dart' },
  { ext: 'dockerfile', name: 'Dockerfile', mode: 'dockerfile' },
  { ext: 'ex', name: 'Elixir', mode: 'exilir' },
  { ext: 'go', name: 'Go', mode: 'golang' },
  { ext: 'graphql', name: 'GraphQL', mode: 'graphqlschema' },
  { ext: 'groovy', name: 'Groovy', mode: 'groovy' },
  { ext: 'hs', name: 'Haskell', mode: 'haskell' },
  { ext: 'html', name: 'HTML', mode: 'html' },
  { ext: 'java', name: 'Java', mode: 'java' },
  { ext: 'js', name: 'JavaScript', mode: 'javascript' },
  { ext: 'jsx', name: 'JavaScript (JSX)', mode: 'jsx' },
  { ext: 'json', name: 'JSON', mode: 'json' },
  { ext: 'kt', name: 'Kotlin', mode: 'kotlin' },
  { ext: 'lua', name: 'Lua', mode: 'lua' },
  { ext: 'mk', name: 'Makefile', mode: 'makefile' },
  { ext: 'md', name: 'Markdown', mode: 'markdown' },
  { ext: 'm', name: 'MATLAB', mode: 'matlab' },
  { ext: 'nginx', name: 'Nginx', mode: 'nginx' },
  { ext: 'm', name: 'Objective-C', mode: 'objectivec' },
  { ext: 'pas', name: 'Pascal', mode: 'pascal' },
  { ext: 'pl', name: 'Perl', mode: 'perl' },
  { ext: 'php', name: 'PHP', mode: 'php' },
  { ext: 'prisma', name: 'Prisma', mode: 'prisma' },
  { ext: 'txt', name: 'Plain Text', mode: 'plain_text' },
  { ext: 'ps1', name: 'PowerShell', mode: 'powershell' },
  { ext: 'py', name: 'Python', mode: 'python' },
  { ext: 'jsx', name: 'JSX', mode: 'jsx' },
  { ext: 'r', name: 'R', mode: 'r' },
  { ext: 'rb', name: 'Ruby', mode: 'ruby' },
  { ext: 'rs', name: 'Rust', mode: 'rust' },
  { ext: 'scala', name: 'Scala', mode: 'scala' },
  { ext: 'sh', name: 'Shell', mode: 'sh' },
  { ext: 'sql', name: 'SQL', mode: 'sql' },
  { ext: 'swift', name: 'Swift', mode: 'swift' },
  { ext: 'tsx', name: 'TypeScript (TSX)', mode: 'tsx' },
  { ext: 'ts', name: 'TypeScript', mode: 'typescript' },
  { ext: 'vb', name: 'Visual Basic', mode: '' },
  { ext: 'vbnet', name: 'VB.NET', mode: '' },
  { ext: 'vue', name: 'Vue', mode: 'vue' },
  { ext: 'xml', name: 'XML', mode: 'xml' },
  { ext: 'yaml', name: 'YAML', mode: 'yaml' },
];

export default languages;
