# Hook useLocalStorage React

Um hook personalizado para React que gerencia dados no localStorage com suporte a TypeScript.

## 🚀 Funcionalidades

- Suporte completo a TypeScript com tipos genéricos
- Serialização/deserialização JSON automática
- Tratamento de erros
- Estado sincronizado entre React e localStorage
- Operações de armazenamento com type-safety

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/react-local-storage.git
cd react-local-storage
npm install
```

## 💡 Como Usar

```typescript
import { useLocalStorage } from './Hooks/useLocalStorage'

// Uso básico com string
const [nome, setNome] = useLocalStorage({
  key: "nomeUsuario",
  initialValue: ""
})

// Com objetos
const [preferencias, setPreferencias] = useLocalStorage({
  key: "prefUsuario",
  initialValue: {
    tema: "claro",
    tamanhoFonte: 16
  }
})
```

## 🔍 Referência da API

### `useLocalStorage<T>`

Um hook genérico que gerencia estado no localStorage.

#### Parâmetros

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| key | string | Chave para armazenamento no localStorage |
| initialValue | T | Valor padrão se não existir valor armazenado |

#### Retorno

Retorna uma tupla contendo:
- `storedValue`: Valor atual armazenado (tipo T)
- `setValue`: Função para atualizar o valor armazenado

## 📝 Exemplos

### Gerenciando Preferências do Usuário

```typescript
function PreferenciasUsuario() {
  const [preferencias, setPreferencias] = useLocalStorage({
    key: 'preferencias',
    initialValue: {
      tema: 'claro',
      tamanhoFonte: 16
    }
  })

  return (
    <>
      <button onClick={() => setPreferencias({
        ...preferencias,
        tema: 'escuro'
      })}>
        Mudar para Tema Escuro
      </button>
    </>
  )
}
```

### Armazenando Arrays

```typescript
function ListaTarefas() {
  const [tarefas, setTarefas] = useLocalStorage({
    key: 'tarefas',
    initialValue: []
  })

  const adicionarTarefa = (tarefa) => {
    setTarefas([...tarefas, tarefa])
  }

  return (
    // Seu JSX aqui
  )
}
```

## ⚠️ Tratamento de Erros

O hook inclui tratamento de erros para:
- Erros de acesso ao localStorage
- Erros de análise JSON
- Validação de tipos de dados

Os erros são registrados no console mantendo o estado estável.

## 🔧 Desenvolvimento

```bash
npm run dev     # Iniciar servidor de desenvolvimento
npm run build   # Build para produção
npm run lint    # Executar ESLint
```
