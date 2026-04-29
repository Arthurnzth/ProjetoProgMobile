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
    // reduz colisão no mesmo millissegundo
    return `${Date.now()}-${crypto.randomUUID().slice(0, 6)}`;
}

export default class PratosEntity {
    constructor(
        id,
        nomeDoPrato,
        valor,
        descricaoDoPrato,
        rank,
        fotoDoPrato
    ) {
        const idNormalizado = normalizeId(id);
        this.id = idNormalizado ?? newId();

        this.nomeDoPrato = nomeDoPrato ?? '';
        this.valor = valor ?? '';
        this.descricaoDoPrato = descricaoDoPrato ?? '';
        this.rank = rank ?? '';
        this.fotoDoPrato = fotoDoPrato;
    }

    // opcional: id pronta para listas
    get id() {
        return String(this.id);
    }

    // opcional: fábrica a partir do JSON da API
    // Converter dados crus da API em uma entidade consistente.
    static fromApi(d = {}) {
        return new PratosEntity(
            d?.id ?? d?._id ?? d?.id?.$oid ?? d?.id?.value,
            d?.nomeDoPrato ?? d?.name ?? d?.nome,
            d?.valor ?? d?.price,
            d?.descricaoDoPrato ?? d?.description ?? d?.descricao,
            d?.rank ?? d?.rating,
            d?.fotoDoPrato ?? d?.image ?? d?.foto
        );
    }
}