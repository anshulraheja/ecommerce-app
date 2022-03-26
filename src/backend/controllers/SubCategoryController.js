import { Response } from "miragejs";


export const getAllSubCategoriesHandler = function () {
    try {
        return new Response(200, {}, { subCategories: this.db.subCategories });
    } catch (error) {
        return new Response(
            500,
            {},
            {
                error,
            }
        );
    }
};



export const getSubCategoryHandler = function (schema, request) {
    const subCategoryId = request.params.subCategoryId;
    try {
        const subCategory = schema.subCategories.findBy({ _id: subCategoryId });
        return new Response(200, {}, { subCategory });
    } catch (error) {
        new Response(
            500,
            {},
            {
                error,
            }
        );
    }
};
