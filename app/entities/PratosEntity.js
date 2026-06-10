// Função para extrair um ID válido.
function normalizeId(valor) {
    if (valor == null)
        return null;

    const tipoDoValor = typeof valor; //Extrai o tipo de dado da variável e armazena.

    if (tipoDoValor === 'string' || tipoDoValor === 'number' || tipoDoValor === 'bigint')
        return String(valor); //Transforma qualquer tipo de dado em string

    //Situação se o valor for um objeto
    if (tipoDoValor === 'object') {
        // casos comuns vindos de API/DB
        if ('$oid' in valor)
            return String(valor.$oid);
        if ('value' in valor)
            return String(valor.value);
        if ('id' in valor)
            return String(valor.id);
    }
    return null; // Não houve extração de ID válido.
}

function newId() {
    // reduz colisão no mesmo millissegundo (sem depender de crypto,
    // que pode não existir no runtime Hermes do React Native)
    return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export default class PratosEntity {
    constructor(
        id,
        nomeDoPrato,
        valor,
        descricaoDoPrato,
        preparo,
        rank,
        fotoDoPrato,
        categoria
    ) {
        const idNormalizado = normalizeId(id);
        this._id = idNormalizado ?? newId();

        this.nomeDoPrato = nomeDoPrato ?? '';
        this.valor = valor ?? '';
        this.descricaoDoPrato = descricaoDoPrato ?? '';
        this.preparo = preparo ?? '';
        this.rank = rank ?? '';
        this.fotoDoPrato = fotoDoPrato;
        this.categoria = categoria ?? 'comida';
    }

    // opcional: id pronta para listas
    get id() {
        return String(this._id);
    }

    // opcional: fábrica a partir do JSON da API
    // Converter dados crus da API em uma entidade consistente.
    static fromApi(d = {}) {
        return new PratosEntity(
            d?.id ?? d?._id ?? d?.id?.$oid ?? d?.id?.value,
            d?.nomeDoPrato ?? d?.name ?? d?.nome,
            d?.valor ?? d?.price,
            d?.descricaoDoPrato ?? d?.description ?? d?.descricao,
            d?.preparo,
            d?.rank ?? d?.rating,
            d?.fotoDoPrato ?? d?.image ?? d?.foto,
            d?.categoria
        );
    }
}