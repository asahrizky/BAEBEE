"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employees_entity_1 = require("./src/modules/employees/employees.entity");
const gender_category_entity_1 = require("./src/modules/warehouse/entities/gender-category.entity");
const age_category_entity_1 = require("./src/modules/warehouse/entities/age-category.entity");
const product_type_entity_1 = require("./src/modules/warehouse/entities/product-type.entity");
const product_entity_1 = require("./src/modules/warehouse/entities/product.entity");
const product_size_entity_1 = require("./src/modules/warehouse/entities/product-size.entity");
const config = {
    type: 'sqlite',
    database: 'pos_db.sqlite',
    entities: [
        employees_entity_1.Employee,
        gender_category_entity_1.GenderCategory,
        age_category_entity_1.AgeCategory,
        product_type_entity_1.ProductType,
        product_entity_1.Product,
        product_size_entity_1.ProductSize
    ],
    synchronize: true,
    logging: true,
};
exports.default = config;
//# sourceMappingURL=typeorm.config.js.map