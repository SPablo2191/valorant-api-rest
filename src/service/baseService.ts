import {
  MySqlTable,
  SelectedFields,
  MySqlColumn,
  MySqlInsertValue,
} from "drizzle-orm/mysql-core";
import { db } from "../database/databaseConfig";
import { BinaryOperator } from "drizzle-orm";

export async function findAll<Model>(
  table: MySqlTable,
  columns?: SelectedFields
): Promise<Model[]> {
  const results = columns
    ? await db.select(columns).from(table)
    : await db.select().from(table);
  return results as Model[];
}

export async function findOneWhere<Model>(
  table: MySqlTable,
  operator: BinaryOperator,
  columnValue: MySqlColumn,
  comparisonValue: string | number | boolean
): Promise<Model[]> {
  const results = await db
    .select()
    .from(table)
    .where(operator(columnValue, comparisonValue));
  return results as Model[];
}

export async function create<Model>(
  table: MySqlTable,
  values: MySqlInsertValue<MySqlTable>
): Promise<Model> {
  const results = await db.insert(table).values(values);
  return results as Model;
}


