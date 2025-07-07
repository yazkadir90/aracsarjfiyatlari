
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model StationOption
 * 
 */
export type StationOption = $Result.DefaultSelection<Prisma.$StationOptionPayload>
/**
 * Model StationBrand
 * 
 */
export type StationBrand = $Result.DefaultSelection<Prisma.$StationBrandPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Approval
 * 
 */
export type Approval = $Result.DefaultSelection<Prisma.$ApprovalPayload>
/**
 * Model SeoSetting
 * 
 */
export type SeoSetting = $Result.DefaultSelection<Prisma.$SeoSettingPayload>
/**
 * Model SiteSetting
 * 
 */
export type SiteSetting = $Result.DefaultSelection<Prisma.$SiteSettingPayload>
/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more StationOptions
 * const stationOptions = await prisma.stationOption.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more StationOptions
   * const stationOptions = await prisma.stationOption.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.stationOption`: Exposes CRUD operations for the **StationOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StationOptions
    * const stationOptions = await prisma.stationOption.findMany()
    * ```
    */
  get stationOption(): Prisma.StationOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stationBrand`: Exposes CRUD operations for the **StationBrand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StationBrands
    * const stationBrands = await prisma.stationBrand.findMany()
    * ```
    */
  get stationBrand(): Prisma.StationBrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.approval`: Exposes CRUD operations for the **Approval** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Approvals
    * const approvals = await prisma.approval.findMany()
    * ```
    */
  get approval(): Prisma.ApprovalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seoSetting`: Exposes CRUD operations for the **SeoSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeoSettings
    * const seoSettings = await prisma.seoSetting.findMany()
    * ```
    */
  get seoSetting(): Prisma.SeoSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteSetting`: Exposes CRUD operations for the **SiteSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteSettings
    * const siteSettings = await prisma.siteSetting.findMany()
    * ```
    */
  get siteSetting(): Prisma.SiteSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    StationOption: 'StationOption',
    StationBrand: 'StationBrand',
    User: 'User',
    Approval: 'Approval',
    SeoSetting: 'SeoSetting',
    SiteSetting: 'SiteSetting',
    Car: 'Car'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "stationOption" | "stationBrand" | "user" | "approval" | "seoSetting" | "siteSetting" | "car"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      StationOption: {
        payload: Prisma.$StationOptionPayload<ExtArgs>
        fields: Prisma.StationOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StationOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StationOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationOptionPayload>
          }
          findFirst: {
            args: Prisma.StationOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StationOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationOptionPayload>
          }
          findMany: {
            args: Prisma.StationOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationOptionPayload>[]
          }
          create: {
            args: Prisma.StationOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationOptionPayload>
          }
          createMany: {
            args: Prisma.StationOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StationOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationOptionPayload>[]
          }
          delete: {
            args: Prisma.StationOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationOptionPayload>
          }
          update: {
            args: Prisma.StationOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationOptionPayload>
          }
          deleteMany: {
            args: Prisma.StationOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StationOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StationOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationOptionPayload>[]
          }
          upsert: {
            args: Prisma.StationOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationOptionPayload>
          }
          aggregate: {
            args: Prisma.StationOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStationOption>
          }
          groupBy: {
            args: Prisma.StationOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<StationOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.StationOptionCountArgs<ExtArgs>
            result: $Utils.Optional<StationOptionCountAggregateOutputType> | number
          }
        }
      }
      StationBrand: {
        payload: Prisma.$StationBrandPayload<ExtArgs>
        fields: Prisma.StationBrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StationBrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationBrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StationBrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationBrandPayload>
          }
          findFirst: {
            args: Prisma.StationBrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationBrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StationBrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationBrandPayload>
          }
          findMany: {
            args: Prisma.StationBrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationBrandPayload>[]
          }
          create: {
            args: Prisma.StationBrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationBrandPayload>
          }
          createMany: {
            args: Prisma.StationBrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StationBrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationBrandPayload>[]
          }
          delete: {
            args: Prisma.StationBrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationBrandPayload>
          }
          update: {
            args: Prisma.StationBrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationBrandPayload>
          }
          deleteMany: {
            args: Prisma.StationBrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StationBrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StationBrandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationBrandPayload>[]
          }
          upsert: {
            args: Prisma.StationBrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationBrandPayload>
          }
          aggregate: {
            args: Prisma.StationBrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStationBrand>
          }
          groupBy: {
            args: Prisma.StationBrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<StationBrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.StationBrandCountArgs<ExtArgs>
            result: $Utils.Optional<StationBrandCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Approval: {
        payload: Prisma.$ApprovalPayload<ExtArgs>
        fields: Prisma.ApprovalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          findFirst: {
            args: Prisma.ApprovalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          findMany: {
            args: Prisma.ApprovalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>[]
          }
          create: {
            args: Prisma.ApprovalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          createMany: {
            args: Prisma.ApprovalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApprovalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>[]
          }
          delete: {
            args: Prisma.ApprovalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          update: {
            args: Prisma.ApprovalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          deleteMany: {
            args: Prisma.ApprovalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApprovalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>[]
          }
          upsert: {
            args: Prisma.ApprovalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          aggregate: {
            args: Prisma.ApprovalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApproval>
          }
          groupBy: {
            args: Prisma.ApprovalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovalCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovalCountAggregateOutputType> | number
          }
        }
      }
      SeoSetting: {
        payload: Prisma.$SeoSettingPayload<ExtArgs>
        fields: Prisma.SeoSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeoSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeoSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingPayload>
          }
          findFirst: {
            args: Prisma.SeoSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeoSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingPayload>
          }
          findMany: {
            args: Prisma.SeoSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingPayload>[]
          }
          create: {
            args: Prisma.SeoSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingPayload>
          }
          createMany: {
            args: Prisma.SeoSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeoSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingPayload>[]
          }
          delete: {
            args: Prisma.SeoSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingPayload>
          }
          update: {
            args: Prisma.SeoSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingPayload>
          }
          deleteMany: {
            args: Prisma.SeoSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeoSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeoSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingPayload>[]
          }
          upsert: {
            args: Prisma.SeoSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingPayload>
          }
          aggregate: {
            args: Prisma.SeoSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeoSetting>
          }
          groupBy: {
            args: Prisma.SeoSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeoSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeoSettingCountArgs<ExtArgs>
            result: $Utils.Optional<SeoSettingCountAggregateOutputType> | number
          }
        }
      }
      SiteSetting: {
        payload: Prisma.$SiteSettingPayload<ExtArgs>
        fields: Prisma.SiteSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          findFirst: {
            args: Prisma.SiteSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          findMany: {
            args: Prisma.SiteSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>[]
          }
          create: {
            args: Prisma.SiteSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          createMany: {
            args: Prisma.SiteSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>[]
          }
          delete: {
            args: Prisma.SiteSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          update: {
            args: Prisma.SiteSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          deleteMany: {
            args: Prisma.SiteSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>[]
          }
          upsert: {
            args: Prisma.SiteSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          aggregate: {
            args: Prisma.SiteSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteSetting>
          }
          groupBy: {
            args: Prisma.SiteSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteSettingCountArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingCountAggregateOutputType> | number
          }
        }
      }
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    stationOption?: StationOptionOmit
    stationBrand?: StationBrandOmit
    user?: UserOmit
    approval?: ApprovalOmit
    seoSetting?: SeoSettingOmit
    siteSetting?: SiteSettingOmit
    car?: CarOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StationBrandCountOutputType
   */

  export type StationBrandCountOutputType = {
    options: number
    approvals: number
  }

  export type StationBrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | StationBrandCountOutputTypeCountOptionsArgs
    approvals?: boolean | StationBrandCountOutputTypeCountApprovalsArgs
  }

  // Custom InputTypes
  /**
   * StationBrandCountOutputType without action
   */
  export type StationBrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationBrandCountOutputType
     */
    select?: StationBrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StationBrandCountOutputType without action
   */
  export type StationBrandCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StationOptionWhereInput
  }

  /**
   * StationBrandCountOutputType without action
   */
  export type StationBrandCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    brands: number
    approvalsGiven: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brands?: boolean | UserCountOutputTypeCountBrandsArgs
    approvalsGiven?: boolean | UserCountOutputTypeCountApprovalsGivenArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBrandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StationBrandWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovalsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model StationOption
   */

  export type AggregateStationOption = {
    _count: StationOptionCountAggregateOutputType | null
    _avg: StationOptionAvgAggregateOutputType | null
    _sum: StationOptionSumAggregateOutputType | null
    _min: StationOptionMinAggregateOutputType | null
    _max: StationOptionMaxAggregateOutputType | null
  }

  export type StationOptionAvgAggregateOutputType = {
    id: number | null
    priceAmount: number | null
    brandId: number | null
  }

  export type StationOptionSumAggregateOutputType = {
    id: number | null
    priceAmount: number | null
    brandId: number | null
  }

  export type StationOptionMinAggregateOutputType = {
    id: number | null
    socketType: string | null
    power: string | null
    priceAmount: number | null
    priceUnit: string | null
    brandId: number | null
  }

  export type StationOptionMaxAggregateOutputType = {
    id: number | null
    socketType: string | null
    power: string | null
    priceAmount: number | null
    priceUnit: string | null
    brandId: number | null
  }

  export type StationOptionCountAggregateOutputType = {
    id: number
    socketType: number
    power: number
    priceAmount: number
    priceUnit: number
    brandId: number
    _all: number
  }


  export type StationOptionAvgAggregateInputType = {
    id?: true
    priceAmount?: true
    brandId?: true
  }

  export type StationOptionSumAggregateInputType = {
    id?: true
    priceAmount?: true
    brandId?: true
  }

  export type StationOptionMinAggregateInputType = {
    id?: true
    socketType?: true
    power?: true
    priceAmount?: true
    priceUnit?: true
    brandId?: true
  }

  export type StationOptionMaxAggregateInputType = {
    id?: true
    socketType?: true
    power?: true
    priceAmount?: true
    priceUnit?: true
    brandId?: true
  }

  export type StationOptionCountAggregateInputType = {
    id?: true
    socketType?: true
    power?: true
    priceAmount?: true
    priceUnit?: true
    brandId?: true
    _all?: true
  }

  export type StationOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StationOption to aggregate.
     */
    where?: StationOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StationOptions to fetch.
     */
    orderBy?: StationOptionOrderByWithRelationInput | StationOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StationOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StationOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StationOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StationOptions
    **/
    _count?: true | StationOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StationOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StationOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StationOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StationOptionMaxAggregateInputType
  }

  export type GetStationOptionAggregateType<T extends StationOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateStationOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStationOption[P]>
      : GetScalarType<T[P], AggregateStationOption[P]>
  }




  export type StationOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StationOptionWhereInput
    orderBy?: StationOptionOrderByWithAggregationInput | StationOptionOrderByWithAggregationInput[]
    by: StationOptionScalarFieldEnum[] | StationOptionScalarFieldEnum
    having?: StationOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StationOptionCountAggregateInputType | true
    _avg?: StationOptionAvgAggregateInputType
    _sum?: StationOptionSumAggregateInputType
    _min?: StationOptionMinAggregateInputType
    _max?: StationOptionMaxAggregateInputType
  }

  export type StationOptionGroupByOutputType = {
    id: number
    socketType: string
    power: string
    priceAmount: number
    priceUnit: string
    brandId: number
    _count: StationOptionCountAggregateOutputType | null
    _avg: StationOptionAvgAggregateOutputType | null
    _sum: StationOptionSumAggregateOutputType | null
    _min: StationOptionMinAggregateOutputType | null
    _max: StationOptionMaxAggregateOutputType | null
  }

  type GetStationOptionGroupByPayload<T extends StationOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StationOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StationOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StationOptionGroupByOutputType[P]>
            : GetScalarType<T[P], StationOptionGroupByOutputType[P]>
        }
      >
    >


  export type StationOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    socketType?: boolean
    power?: boolean
    priceAmount?: boolean
    priceUnit?: boolean
    brandId?: boolean
    brand?: boolean | StationBrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stationOption"]>

  export type StationOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    socketType?: boolean
    power?: boolean
    priceAmount?: boolean
    priceUnit?: boolean
    brandId?: boolean
    brand?: boolean | StationBrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stationOption"]>

  export type StationOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    socketType?: boolean
    power?: boolean
    priceAmount?: boolean
    priceUnit?: boolean
    brandId?: boolean
    brand?: boolean | StationBrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stationOption"]>

  export type StationOptionSelectScalar = {
    id?: boolean
    socketType?: boolean
    power?: boolean
    priceAmount?: boolean
    priceUnit?: boolean
    brandId?: boolean
  }

  export type StationOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "socketType" | "power" | "priceAmount" | "priceUnit" | "brandId", ExtArgs["result"]["stationOption"]>
  export type StationOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | StationBrandDefaultArgs<ExtArgs>
  }
  export type StationOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | StationBrandDefaultArgs<ExtArgs>
  }
  export type StationOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | StationBrandDefaultArgs<ExtArgs>
  }

  export type $StationOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StationOption"
    objects: {
      brand: Prisma.$StationBrandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      socketType: string
      power: string
      priceAmount: number
      priceUnit: string
      brandId: number
    }, ExtArgs["result"]["stationOption"]>
    composites: {}
  }

  type StationOptionGetPayload<S extends boolean | null | undefined | StationOptionDefaultArgs> = $Result.GetResult<Prisma.$StationOptionPayload, S>

  type StationOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StationOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StationOptionCountAggregateInputType | true
    }

  export interface StationOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StationOption'], meta: { name: 'StationOption' } }
    /**
     * Find zero or one StationOption that matches the filter.
     * @param {StationOptionFindUniqueArgs} args - Arguments to find a StationOption
     * @example
     * // Get one StationOption
     * const stationOption = await prisma.stationOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StationOptionFindUniqueArgs>(args: SelectSubset<T, StationOptionFindUniqueArgs<ExtArgs>>): Prisma__StationOptionClient<$Result.GetResult<Prisma.$StationOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StationOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StationOptionFindUniqueOrThrowArgs} args - Arguments to find a StationOption
     * @example
     * // Get one StationOption
     * const stationOption = await prisma.stationOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StationOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, StationOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StationOptionClient<$Result.GetResult<Prisma.$StationOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StationOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationOptionFindFirstArgs} args - Arguments to find a StationOption
     * @example
     * // Get one StationOption
     * const stationOption = await prisma.stationOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StationOptionFindFirstArgs>(args?: SelectSubset<T, StationOptionFindFirstArgs<ExtArgs>>): Prisma__StationOptionClient<$Result.GetResult<Prisma.$StationOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StationOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationOptionFindFirstOrThrowArgs} args - Arguments to find a StationOption
     * @example
     * // Get one StationOption
     * const stationOption = await prisma.stationOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StationOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, StationOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__StationOptionClient<$Result.GetResult<Prisma.$StationOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StationOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StationOptions
     * const stationOptions = await prisma.stationOption.findMany()
     * 
     * // Get first 10 StationOptions
     * const stationOptions = await prisma.stationOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stationOptionWithIdOnly = await prisma.stationOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StationOptionFindManyArgs>(args?: SelectSubset<T, StationOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StationOption.
     * @param {StationOptionCreateArgs} args - Arguments to create a StationOption.
     * @example
     * // Create one StationOption
     * const StationOption = await prisma.stationOption.create({
     *   data: {
     *     // ... data to create a StationOption
     *   }
     * })
     * 
     */
    create<T extends StationOptionCreateArgs>(args: SelectSubset<T, StationOptionCreateArgs<ExtArgs>>): Prisma__StationOptionClient<$Result.GetResult<Prisma.$StationOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StationOptions.
     * @param {StationOptionCreateManyArgs} args - Arguments to create many StationOptions.
     * @example
     * // Create many StationOptions
     * const stationOption = await prisma.stationOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StationOptionCreateManyArgs>(args?: SelectSubset<T, StationOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StationOptions and returns the data saved in the database.
     * @param {StationOptionCreateManyAndReturnArgs} args - Arguments to create many StationOptions.
     * @example
     * // Create many StationOptions
     * const stationOption = await prisma.stationOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StationOptions and only return the `id`
     * const stationOptionWithIdOnly = await prisma.stationOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StationOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, StationOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StationOption.
     * @param {StationOptionDeleteArgs} args - Arguments to delete one StationOption.
     * @example
     * // Delete one StationOption
     * const StationOption = await prisma.stationOption.delete({
     *   where: {
     *     // ... filter to delete one StationOption
     *   }
     * })
     * 
     */
    delete<T extends StationOptionDeleteArgs>(args: SelectSubset<T, StationOptionDeleteArgs<ExtArgs>>): Prisma__StationOptionClient<$Result.GetResult<Prisma.$StationOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StationOption.
     * @param {StationOptionUpdateArgs} args - Arguments to update one StationOption.
     * @example
     * // Update one StationOption
     * const stationOption = await prisma.stationOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StationOptionUpdateArgs>(args: SelectSubset<T, StationOptionUpdateArgs<ExtArgs>>): Prisma__StationOptionClient<$Result.GetResult<Prisma.$StationOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StationOptions.
     * @param {StationOptionDeleteManyArgs} args - Arguments to filter StationOptions to delete.
     * @example
     * // Delete a few StationOptions
     * const { count } = await prisma.stationOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StationOptionDeleteManyArgs>(args?: SelectSubset<T, StationOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StationOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StationOptions
     * const stationOption = await prisma.stationOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StationOptionUpdateManyArgs>(args: SelectSubset<T, StationOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StationOptions and returns the data updated in the database.
     * @param {StationOptionUpdateManyAndReturnArgs} args - Arguments to update many StationOptions.
     * @example
     * // Update many StationOptions
     * const stationOption = await prisma.stationOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StationOptions and only return the `id`
     * const stationOptionWithIdOnly = await prisma.stationOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StationOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, StationOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StationOption.
     * @param {StationOptionUpsertArgs} args - Arguments to update or create a StationOption.
     * @example
     * // Update or create a StationOption
     * const stationOption = await prisma.stationOption.upsert({
     *   create: {
     *     // ... data to create a StationOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StationOption we want to update
     *   }
     * })
     */
    upsert<T extends StationOptionUpsertArgs>(args: SelectSubset<T, StationOptionUpsertArgs<ExtArgs>>): Prisma__StationOptionClient<$Result.GetResult<Prisma.$StationOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StationOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationOptionCountArgs} args - Arguments to filter StationOptions to count.
     * @example
     * // Count the number of StationOptions
     * const count = await prisma.stationOption.count({
     *   where: {
     *     // ... the filter for the StationOptions we want to count
     *   }
     * })
    **/
    count<T extends StationOptionCountArgs>(
      args?: Subset<T, StationOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StationOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StationOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StationOptionAggregateArgs>(args: Subset<T, StationOptionAggregateArgs>): Prisma.PrismaPromise<GetStationOptionAggregateType<T>>

    /**
     * Group by StationOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StationOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StationOptionGroupByArgs['orderBy'] }
        : { orderBy?: StationOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StationOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStationOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StationOption model
   */
  readonly fields: StationOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StationOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StationOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends StationBrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationBrandDefaultArgs<ExtArgs>>): Prisma__StationBrandClient<$Result.GetResult<Prisma.$StationBrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StationOption model
   */
  interface StationOptionFieldRefs {
    readonly id: FieldRef<"StationOption", 'Int'>
    readonly socketType: FieldRef<"StationOption", 'String'>
    readonly power: FieldRef<"StationOption", 'String'>
    readonly priceAmount: FieldRef<"StationOption", 'Float'>
    readonly priceUnit: FieldRef<"StationOption", 'String'>
    readonly brandId: FieldRef<"StationOption", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StationOption findUnique
   */
  export type StationOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationOption
     */
    select?: StationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationOption
     */
    omit?: StationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationOptionInclude<ExtArgs> | null
    /**
     * Filter, which StationOption to fetch.
     */
    where: StationOptionWhereUniqueInput
  }

  /**
   * StationOption findUniqueOrThrow
   */
  export type StationOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationOption
     */
    select?: StationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationOption
     */
    omit?: StationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationOptionInclude<ExtArgs> | null
    /**
     * Filter, which StationOption to fetch.
     */
    where: StationOptionWhereUniqueInput
  }

  /**
   * StationOption findFirst
   */
  export type StationOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationOption
     */
    select?: StationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationOption
     */
    omit?: StationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationOptionInclude<ExtArgs> | null
    /**
     * Filter, which StationOption to fetch.
     */
    where?: StationOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StationOptions to fetch.
     */
    orderBy?: StationOptionOrderByWithRelationInput | StationOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StationOptions.
     */
    cursor?: StationOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StationOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StationOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StationOptions.
     */
    distinct?: StationOptionScalarFieldEnum | StationOptionScalarFieldEnum[]
  }

  /**
   * StationOption findFirstOrThrow
   */
  export type StationOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationOption
     */
    select?: StationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationOption
     */
    omit?: StationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationOptionInclude<ExtArgs> | null
    /**
     * Filter, which StationOption to fetch.
     */
    where?: StationOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StationOptions to fetch.
     */
    orderBy?: StationOptionOrderByWithRelationInput | StationOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StationOptions.
     */
    cursor?: StationOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StationOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StationOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StationOptions.
     */
    distinct?: StationOptionScalarFieldEnum | StationOptionScalarFieldEnum[]
  }

  /**
   * StationOption findMany
   */
  export type StationOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationOption
     */
    select?: StationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationOption
     */
    omit?: StationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationOptionInclude<ExtArgs> | null
    /**
     * Filter, which StationOptions to fetch.
     */
    where?: StationOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StationOptions to fetch.
     */
    orderBy?: StationOptionOrderByWithRelationInput | StationOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StationOptions.
     */
    cursor?: StationOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StationOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StationOptions.
     */
    skip?: number
    distinct?: StationOptionScalarFieldEnum | StationOptionScalarFieldEnum[]
  }

  /**
   * StationOption create
   */
  export type StationOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationOption
     */
    select?: StationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationOption
     */
    omit?: StationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a StationOption.
     */
    data: XOR<StationOptionCreateInput, StationOptionUncheckedCreateInput>
  }

  /**
   * StationOption createMany
   */
  export type StationOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StationOptions.
     */
    data: StationOptionCreateManyInput | StationOptionCreateManyInput[]
  }

  /**
   * StationOption createManyAndReturn
   */
  export type StationOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationOption
     */
    select?: StationOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StationOption
     */
    omit?: StationOptionOmit<ExtArgs> | null
    /**
     * The data used to create many StationOptions.
     */
    data: StationOptionCreateManyInput | StationOptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StationOption update
   */
  export type StationOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationOption
     */
    select?: StationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationOption
     */
    omit?: StationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a StationOption.
     */
    data: XOR<StationOptionUpdateInput, StationOptionUncheckedUpdateInput>
    /**
     * Choose, which StationOption to update.
     */
    where: StationOptionWhereUniqueInput
  }

  /**
   * StationOption updateMany
   */
  export type StationOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StationOptions.
     */
    data: XOR<StationOptionUpdateManyMutationInput, StationOptionUncheckedUpdateManyInput>
    /**
     * Filter which StationOptions to update
     */
    where?: StationOptionWhereInput
    /**
     * Limit how many StationOptions to update.
     */
    limit?: number
  }

  /**
   * StationOption updateManyAndReturn
   */
  export type StationOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationOption
     */
    select?: StationOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StationOption
     */
    omit?: StationOptionOmit<ExtArgs> | null
    /**
     * The data used to update StationOptions.
     */
    data: XOR<StationOptionUpdateManyMutationInput, StationOptionUncheckedUpdateManyInput>
    /**
     * Filter which StationOptions to update
     */
    where?: StationOptionWhereInput
    /**
     * Limit how many StationOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StationOption upsert
   */
  export type StationOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationOption
     */
    select?: StationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationOption
     */
    omit?: StationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the StationOption to update in case it exists.
     */
    where: StationOptionWhereUniqueInput
    /**
     * In case the StationOption found by the `where` argument doesn't exist, create a new StationOption with this data.
     */
    create: XOR<StationOptionCreateInput, StationOptionUncheckedCreateInput>
    /**
     * In case the StationOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StationOptionUpdateInput, StationOptionUncheckedUpdateInput>
  }

  /**
   * StationOption delete
   */
  export type StationOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationOption
     */
    select?: StationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationOption
     */
    omit?: StationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationOptionInclude<ExtArgs> | null
    /**
     * Filter which StationOption to delete.
     */
    where: StationOptionWhereUniqueInput
  }

  /**
   * StationOption deleteMany
   */
  export type StationOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StationOptions to delete
     */
    where?: StationOptionWhereInput
    /**
     * Limit how many StationOptions to delete.
     */
    limit?: number
  }

  /**
   * StationOption without action
   */
  export type StationOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationOption
     */
    select?: StationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationOption
     */
    omit?: StationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationOptionInclude<ExtArgs> | null
  }


  /**
   * Model StationBrand
   */

  export type AggregateStationBrand = {
    _count: StationBrandCountAggregateOutputType | null
    _avg: StationBrandAvgAggregateOutputType | null
    _sum: StationBrandSumAggregateOutputType | null
    _min: StationBrandMinAggregateOutputType | null
    _max: StationBrandMaxAggregateOutputType | null
  }

  export type StationBrandAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type StationBrandSumAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type StationBrandMinAggregateOutputType = {
    id: number | null
    name: string | null
    sourceUrl: string | null
    createdById: number | null
    approved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StationBrandMaxAggregateOutputType = {
    id: number | null
    name: string | null
    sourceUrl: string | null
    createdById: number | null
    approved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StationBrandCountAggregateOutputType = {
    id: number
    name: number
    sourceUrl: number
    createdById: number
    approved: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StationBrandAvgAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type StationBrandSumAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type StationBrandMinAggregateInputType = {
    id?: true
    name?: true
    sourceUrl?: true
    createdById?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StationBrandMaxAggregateInputType = {
    id?: true
    name?: true
    sourceUrl?: true
    createdById?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StationBrandCountAggregateInputType = {
    id?: true
    name?: true
    sourceUrl?: true
    createdById?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StationBrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StationBrand to aggregate.
     */
    where?: StationBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StationBrands to fetch.
     */
    orderBy?: StationBrandOrderByWithRelationInput | StationBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StationBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StationBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StationBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StationBrands
    **/
    _count?: true | StationBrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StationBrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StationBrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StationBrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StationBrandMaxAggregateInputType
  }

  export type GetStationBrandAggregateType<T extends StationBrandAggregateArgs> = {
        [P in keyof T & keyof AggregateStationBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStationBrand[P]>
      : GetScalarType<T[P], AggregateStationBrand[P]>
  }




  export type StationBrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StationBrandWhereInput
    orderBy?: StationBrandOrderByWithAggregationInput | StationBrandOrderByWithAggregationInput[]
    by: StationBrandScalarFieldEnum[] | StationBrandScalarFieldEnum
    having?: StationBrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StationBrandCountAggregateInputType | true
    _avg?: StationBrandAvgAggregateInputType
    _sum?: StationBrandSumAggregateInputType
    _min?: StationBrandMinAggregateInputType
    _max?: StationBrandMaxAggregateInputType
  }

  export type StationBrandGroupByOutputType = {
    id: number
    name: string
    sourceUrl: string
    createdById: number | null
    approved: boolean
    createdAt: Date
    updatedAt: Date
    _count: StationBrandCountAggregateOutputType | null
    _avg: StationBrandAvgAggregateOutputType | null
    _sum: StationBrandSumAggregateOutputType | null
    _min: StationBrandMinAggregateOutputType | null
    _max: StationBrandMaxAggregateOutputType | null
  }

  type GetStationBrandGroupByPayload<T extends StationBrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StationBrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StationBrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StationBrandGroupByOutputType[P]>
            : GetScalarType<T[P], StationBrandGroupByOutputType[P]>
        }
      >
    >


  export type StationBrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sourceUrl?: boolean
    createdById?: boolean
    approved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    options?: boolean | StationBrand$optionsArgs<ExtArgs>
    createdBy?: boolean | StationBrand$createdByArgs<ExtArgs>
    approvals?: boolean | StationBrand$approvalsArgs<ExtArgs>
    _count?: boolean | StationBrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stationBrand"]>

  export type StationBrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sourceUrl?: boolean
    createdById?: boolean
    approved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | StationBrand$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["stationBrand"]>

  export type StationBrandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sourceUrl?: boolean
    createdById?: boolean
    approved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | StationBrand$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["stationBrand"]>

  export type StationBrandSelectScalar = {
    id?: boolean
    name?: boolean
    sourceUrl?: boolean
    createdById?: boolean
    approved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StationBrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sourceUrl" | "createdById" | "approved" | "createdAt" | "updatedAt", ExtArgs["result"]["stationBrand"]>
  export type StationBrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | StationBrand$optionsArgs<ExtArgs>
    createdBy?: boolean | StationBrand$createdByArgs<ExtArgs>
    approvals?: boolean | StationBrand$approvalsArgs<ExtArgs>
    _count?: boolean | StationBrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StationBrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | StationBrand$createdByArgs<ExtArgs>
  }
  export type StationBrandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | StationBrand$createdByArgs<ExtArgs>
  }

  export type $StationBrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StationBrand"
    objects: {
      options: Prisma.$StationOptionPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      approvals: Prisma.$ApprovalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      sourceUrl: string
      createdById: number | null
      approved: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stationBrand"]>
    composites: {}
  }

  type StationBrandGetPayload<S extends boolean | null | undefined | StationBrandDefaultArgs> = $Result.GetResult<Prisma.$StationBrandPayload, S>

  type StationBrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StationBrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StationBrandCountAggregateInputType | true
    }

  export interface StationBrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StationBrand'], meta: { name: 'StationBrand' } }
    /**
     * Find zero or one StationBrand that matches the filter.
     * @param {StationBrandFindUniqueArgs} args - Arguments to find a StationBrand
     * @example
     * // Get one StationBrand
     * const stationBrand = await prisma.stationBrand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StationBrandFindUniqueArgs>(args: SelectSubset<T, StationBrandFindUniqueArgs<ExtArgs>>): Prisma__StationBrandClient<$Result.GetResult<Prisma.$StationBrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StationBrand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StationBrandFindUniqueOrThrowArgs} args - Arguments to find a StationBrand
     * @example
     * // Get one StationBrand
     * const stationBrand = await prisma.stationBrand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StationBrandFindUniqueOrThrowArgs>(args: SelectSubset<T, StationBrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StationBrandClient<$Result.GetResult<Prisma.$StationBrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StationBrand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationBrandFindFirstArgs} args - Arguments to find a StationBrand
     * @example
     * // Get one StationBrand
     * const stationBrand = await prisma.stationBrand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StationBrandFindFirstArgs>(args?: SelectSubset<T, StationBrandFindFirstArgs<ExtArgs>>): Prisma__StationBrandClient<$Result.GetResult<Prisma.$StationBrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StationBrand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationBrandFindFirstOrThrowArgs} args - Arguments to find a StationBrand
     * @example
     * // Get one StationBrand
     * const stationBrand = await prisma.stationBrand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StationBrandFindFirstOrThrowArgs>(args?: SelectSubset<T, StationBrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__StationBrandClient<$Result.GetResult<Prisma.$StationBrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StationBrands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationBrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StationBrands
     * const stationBrands = await prisma.stationBrand.findMany()
     * 
     * // Get first 10 StationBrands
     * const stationBrands = await prisma.stationBrand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stationBrandWithIdOnly = await prisma.stationBrand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StationBrandFindManyArgs>(args?: SelectSubset<T, StationBrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationBrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StationBrand.
     * @param {StationBrandCreateArgs} args - Arguments to create a StationBrand.
     * @example
     * // Create one StationBrand
     * const StationBrand = await prisma.stationBrand.create({
     *   data: {
     *     // ... data to create a StationBrand
     *   }
     * })
     * 
     */
    create<T extends StationBrandCreateArgs>(args: SelectSubset<T, StationBrandCreateArgs<ExtArgs>>): Prisma__StationBrandClient<$Result.GetResult<Prisma.$StationBrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StationBrands.
     * @param {StationBrandCreateManyArgs} args - Arguments to create many StationBrands.
     * @example
     * // Create many StationBrands
     * const stationBrand = await prisma.stationBrand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StationBrandCreateManyArgs>(args?: SelectSubset<T, StationBrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StationBrands and returns the data saved in the database.
     * @param {StationBrandCreateManyAndReturnArgs} args - Arguments to create many StationBrands.
     * @example
     * // Create many StationBrands
     * const stationBrand = await prisma.stationBrand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StationBrands and only return the `id`
     * const stationBrandWithIdOnly = await prisma.stationBrand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StationBrandCreateManyAndReturnArgs>(args?: SelectSubset<T, StationBrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationBrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StationBrand.
     * @param {StationBrandDeleteArgs} args - Arguments to delete one StationBrand.
     * @example
     * // Delete one StationBrand
     * const StationBrand = await prisma.stationBrand.delete({
     *   where: {
     *     // ... filter to delete one StationBrand
     *   }
     * })
     * 
     */
    delete<T extends StationBrandDeleteArgs>(args: SelectSubset<T, StationBrandDeleteArgs<ExtArgs>>): Prisma__StationBrandClient<$Result.GetResult<Prisma.$StationBrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StationBrand.
     * @param {StationBrandUpdateArgs} args - Arguments to update one StationBrand.
     * @example
     * // Update one StationBrand
     * const stationBrand = await prisma.stationBrand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StationBrandUpdateArgs>(args: SelectSubset<T, StationBrandUpdateArgs<ExtArgs>>): Prisma__StationBrandClient<$Result.GetResult<Prisma.$StationBrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StationBrands.
     * @param {StationBrandDeleteManyArgs} args - Arguments to filter StationBrands to delete.
     * @example
     * // Delete a few StationBrands
     * const { count } = await prisma.stationBrand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StationBrandDeleteManyArgs>(args?: SelectSubset<T, StationBrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StationBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationBrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StationBrands
     * const stationBrand = await prisma.stationBrand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StationBrandUpdateManyArgs>(args: SelectSubset<T, StationBrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StationBrands and returns the data updated in the database.
     * @param {StationBrandUpdateManyAndReturnArgs} args - Arguments to update many StationBrands.
     * @example
     * // Update many StationBrands
     * const stationBrand = await prisma.stationBrand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StationBrands and only return the `id`
     * const stationBrandWithIdOnly = await prisma.stationBrand.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StationBrandUpdateManyAndReturnArgs>(args: SelectSubset<T, StationBrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationBrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StationBrand.
     * @param {StationBrandUpsertArgs} args - Arguments to update or create a StationBrand.
     * @example
     * // Update or create a StationBrand
     * const stationBrand = await prisma.stationBrand.upsert({
     *   create: {
     *     // ... data to create a StationBrand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StationBrand we want to update
     *   }
     * })
     */
    upsert<T extends StationBrandUpsertArgs>(args: SelectSubset<T, StationBrandUpsertArgs<ExtArgs>>): Prisma__StationBrandClient<$Result.GetResult<Prisma.$StationBrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StationBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationBrandCountArgs} args - Arguments to filter StationBrands to count.
     * @example
     * // Count the number of StationBrands
     * const count = await prisma.stationBrand.count({
     *   where: {
     *     // ... the filter for the StationBrands we want to count
     *   }
     * })
    **/
    count<T extends StationBrandCountArgs>(
      args?: Subset<T, StationBrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StationBrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StationBrand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationBrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StationBrandAggregateArgs>(args: Subset<T, StationBrandAggregateArgs>): Prisma.PrismaPromise<GetStationBrandAggregateType<T>>

    /**
     * Group by StationBrand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationBrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StationBrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StationBrandGroupByArgs['orderBy'] }
        : { orderBy?: StationBrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StationBrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStationBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StationBrand model
   */
  readonly fields: StationBrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StationBrand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StationBrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    options<T extends StationBrand$optionsArgs<ExtArgs> = {}>(args?: Subset<T, StationBrand$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdBy<T extends StationBrand$createdByArgs<ExtArgs> = {}>(args?: Subset<T, StationBrand$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    approvals<T extends StationBrand$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, StationBrand$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StationBrand model
   */
  interface StationBrandFieldRefs {
    readonly id: FieldRef<"StationBrand", 'Int'>
    readonly name: FieldRef<"StationBrand", 'String'>
    readonly sourceUrl: FieldRef<"StationBrand", 'String'>
    readonly createdById: FieldRef<"StationBrand", 'Int'>
    readonly approved: FieldRef<"StationBrand", 'Boolean'>
    readonly createdAt: FieldRef<"StationBrand", 'DateTime'>
    readonly updatedAt: FieldRef<"StationBrand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StationBrand findUnique
   */
  export type StationBrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationBrand
     */
    select?: StationBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationBrand
     */
    omit?: StationBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationBrandInclude<ExtArgs> | null
    /**
     * Filter, which StationBrand to fetch.
     */
    where: StationBrandWhereUniqueInput
  }

  /**
   * StationBrand findUniqueOrThrow
   */
  export type StationBrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationBrand
     */
    select?: StationBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationBrand
     */
    omit?: StationBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationBrandInclude<ExtArgs> | null
    /**
     * Filter, which StationBrand to fetch.
     */
    where: StationBrandWhereUniqueInput
  }

  /**
   * StationBrand findFirst
   */
  export type StationBrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationBrand
     */
    select?: StationBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationBrand
     */
    omit?: StationBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationBrandInclude<ExtArgs> | null
    /**
     * Filter, which StationBrand to fetch.
     */
    where?: StationBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StationBrands to fetch.
     */
    orderBy?: StationBrandOrderByWithRelationInput | StationBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StationBrands.
     */
    cursor?: StationBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StationBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StationBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StationBrands.
     */
    distinct?: StationBrandScalarFieldEnum | StationBrandScalarFieldEnum[]
  }

  /**
   * StationBrand findFirstOrThrow
   */
  export type StationBrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationBrand
     */
    select?: StationBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationBrand
     */
    omit?: StationBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationBrandInclude<ExtArgs> | null
    /**
     * Filter, which StationBrand to fetch.
     */
    where?: StationBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StationBrands to fetch.
     */
    orderBy?: StationBrandOrderByWithRelationInput | StationBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StationBrands.
     */
    cursor?: StationBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StationBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StationBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StationBrands.
     */
    distinct?: StationBrandScalarFieldEnum | StationBrandScalarFieldEnum[]
  }

  /**
   * StationBrand findMany
   */
  export type StationBrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationBrand
     */
    select?: StationBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationBrand
     */
    omit?: StationBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationBrandInclude<ExtArgs> | null
    /**
     * Filter, which StationBrands to fetch.
     */
    where?: StationBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StationBrands to fetch.
     */
    orderBy?: StationBrandOrderByWithRelationInput | StationBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StationBrands.
     */
    cursor?: StationBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StationBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StationBrands.
     */
    skip?: number
    distinct?: StationBrandScalarFieldEnum | StationBrandScalarFieldEnum[]
  }

  /**
   * StationBrand create
   */
  export type StationBrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationBrand
     */
    select?: StationBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationBrand
     */
    omit?: StationBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationBrandInclude<ExtArgs> | null
    /**
     * The data needed to create a StationBrand.
     */
    data: XOR<StationBrandCreateInput, StationBrandUncheckedCreateInput>
  }

  /**
   * StationBrand createMany
   */
  export type StationBrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StationBrands.
     */
    data: StationBrandCreateManyInput | StationBrandCreateManyInput[]
  }

  /**
   * StationBrand createManyAndReturn
   */
  export type StationBrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationBrand
     */
    select?: StationBrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StationBrand
     */
    omit?: StationBrandOmit<ExtArgs> | null
    /**
     * The data used to create many StationBrands.
     */
    data: StationBrandCreateManyInput | StationBrandCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationBrandIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StationBrand update
   */
  export type StationBrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationBrand
     */
    select?: StationBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationBrand
     */
    omit?: StationBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationBrandInclude<ExtArgs> | null
    /**
     * The data needed to update a StationBrand.
     */
    data: XOR<StationBrandUpdateInput, StationBrandUncheckedUpdateInput>
    /**
     * Choose, which StationBrand to update.
     */
    where: StationBrandWhereUniqueInput
  }

  /**
   * StationBrand updateMany
   */
  export type StationBrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StationBrands.
     */
    data: XOR<StationBrandUpdateManyMutationInput, StationBrandUncheckedUpdateManyInput>
    /**
     * Filter which StationBrands to update
     */
    where?: StationBrandWhereInput
    /**
     * Limit how many StationBrands to update.
     */
    limit?: number
  }

  /**
   * StationBrand updateManyAndReturn
   */
  export type StationBrandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationBrand
     */
    select?: StationBrandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StationBrand
     */
    omit?: StationBrandOmit<ExtArgs> | null
    /**
     * The data used to update StationBrands.
     */
    data: XOR<StationBrandUpdateManyMutationInput, StationBrandUncheckedUpdateManyInput>
    /**
     * Filter which StationBrands to update
     */
    where?: StationBrandWhereInput
    /**
     * Limit how many StationBrands to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationBrandIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StationBrand upsert
   */
  export type StationBrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationBrand
     */
    select?: StationBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationBrand
     */
    omit?: StationBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationBrandInclude<ExtArgs> | null
    /**
     * The filter to search for the StationBrand to update in case it exists.
     */
    where: StationBrandWhereUniqueInput
    /**
     * In case the StationBrand found by the `where` argument doesn't exist, create a new StationBrand with this data.
     */
    create: XOR<StationBrandCreateInput, StationBrandUncheckedCreateInput>
    /**
     * In case the StationBrand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StationBrandUpdateInput, StationBrandUncheckedUpdateInput>
  }

  /**
   * StationBrand delete
   */
  export type StationBrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationBrand
     */
    select?: StationBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationBrand
     */
    omit?: StationBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationBrandInclude<ExtArgs> | null
    /**
     * Filter which StationBrand to delete.
     */
    where: StationBrandWhereUniqueInput
  }

  /**
   * StationBrand deleteMany
   */
  export type StationBrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StationBrands to delete
     */
    where?: StationBrandWhereInput
    /**
     * Limit how many StationBrands to delete.
     */
    limit?: number
  }

  /**
   * StationBrand.options
   */
  export type StationBrand$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationOption
     */
    select?: StationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationOption
     */
    omit?: StationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationOptionInclude<ExtArgs> | null
    where?: StationOptionWhereInput
    orderBy?: StationOptionOrderByWithRelationInput | StationOptionOrderByWithRelationInput[]
    cursor?: StationOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StationOptionScalarFieldEnum | StationOptionScalarFieldEnum[]
  }

  /**
   * StationBrand.createdBy
   */
  export type StationBrand$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * StationBrand.approvals
   */
  export type StationBrand$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    where?: ApprovalWhereInput
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    cursor?: ApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * StationBrand without action
   */
  export type StationBrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationBrand
     */
    select?: StationBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationBrand
     */
    omit?: StationBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationBrandInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    isAdmin: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    isAdmin: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    isAdmin: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    isAdmin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    isAdmin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    isAdmin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    password: string
    isAdmin: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    isAdmin?: boolean
    brands?: boolean | User$brandsArgs<ExtArgs>
    approvalsGiven?: boolean | User$approvalsGivenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    isAdmin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    isAdmin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    isAdmin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "isAdmin", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brands?: boolean | User$brandsArgs<ExtArgs>
    approvalsGiven?: boolean | User$approvalsGivenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      brands: Prisma.$StationBrandPayload<ExtArgs>[]
      approvalsGiven: Prisma.$ApprovalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      password: string
      isAdmin: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brands<T extends User$brandsArgs<ExtArgs> = {}>(args?: Subset<T, User$brandsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationBrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvalsGiven<T extends User$approvalsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$approvalsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.brands
   */
  export type User$brandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationBrand
     */
    select?: StationBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StationBrand
     */
    omit?: StationBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationBrandInclude<ExtArgs> | null
    where?: StationBrandWhereInput
    orderBy?: StationBrandOrderByWithRelationInput | StationBrandOrderByWithRelationInput[]
    cursor?: StationBrandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StationBrandScalarFieldEnum | StationBrandScalarFieldEnum[]
  }

  /**
   * User.approvalsGiven
   */
  export type User$approvalsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    where?: ApprovalWhereInput
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    cursor?: ApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Approval
   */

  export type AggregateApproval = {
    _count: ApprovalCountAggregateOutputType | null
    _avg: ApprovalAvgAggregateOutputType | null
    _sum: ApprovalSumAggregateOutputType | null
    _min: ApprovalMinAggregateOutputType | null
    _max: ApprovalMaxAggregateOutputType | null
  }

  export type ApprovalAvgAggregateOutputType = {
    id: number | null
    brandId: number | null
    approvedById: number | null
  }

  export type ApprovalSumAggregateOutputType = {
    id: number | null
    brandId: number | null
    approvedById: number | null
  }

  export type ApprovalMinAggregateOutputType = {
    id: number | null
    brandId: number | null
    approvedById: number | null
    approvedAt: Date | null
  }

  export type ApprovalMaxAggregateOutputType = {
    id: number | null
    brandId: number | null
    approvedById: number | null
    approvedAt: Date | null
  }

  export type ApprovalCountAggregateOutputType = {
    id: number
    brandId: number
    approvedById: number
    approvedAt: number
    _all: number
  }


  export type ApprovalAvgAggregateInputType = {
    id?: true
    brandId?: true
    approvedById?: true
  }

  export type ApprovalSumAggregateInputType = {
    id?: true
    brandId?: true
    approvedById?: true
  }

  export type ApprovalMinAggregateInputType = {
    id?: true
    brandId?: true
    approvedById?: true
    approvedAt?: true
  }

  export type ApprovalMaxAggregateInputType = {
    id?: true
    brandId?: true
    approvedById?: true
    approvedAt?: true
  }

  export type ApprovalCountAggregateInputType = {
    id?: true
    brandId?: true
    approvedById?: true
    approvedAt?: true
    _all?: true
  }

  export type ApprovalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Approval to aggregate.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Approvals
    **/
    _count?: true | ApprovalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApprovalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApprovalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalMaxAggregateInputType
  }

  export type GetApprovalAggregateType<T extends ApprovalAggregateArgs> = {
        [P in keyof T & keyof AggregateApproval]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApproval[P]>
      : GetScalarType<T[P], AggregateApproval[P]>
  }




  export type ApprovalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalWhereInput
    orderBy?: ApprovalOrderByWithAggregationInput | ApprovalOrderByWithAggregationInput[]
    by: ApprovalScalarFieldEnum[] | ApprovalScalarFieldEnum
    having?: ApprovalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovalCountAggregateInputType | true
    _avg?: ApprovalAvgAggregateInputType
    _sum?: ApprovalSumAggregateInputType
    _min?: ApprovalMinAggregateInputType
    _max?: ApprovalMaxAggregateInputType
  }

  export type ApprovalGroupByOutputType = {
    id: number
    brandId: number
    approvedById: number
    approvedAt: Date
    _count: ApprovalCountAggregateOutputType | null
    _avg: ApprovalAvgAggregateOutputType | null
    _sum: ApprovalSumAggregateOutputType | null
    _min: ApprovalMinAggregateOutputType | null
    _max: ApprovalMaxAggregateOutputType | null
  }

  type GetApprovalGroupByPayload<T extends ApprovalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovalGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovalGroupByOutputType[P]>
        }
      >
    >


  export type ApprovalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    brand?: boolean | StationBrandDefaultArgs<ExtArgs>
    approvedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approval"]>

  export type ApprovalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    brand?: boolean | StationBrandDefaultArgs<ExtArgs>
    approvedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approval"]>

  export type ApprovalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    brand?: boolean | StationBrandDefaultArgs<ExtArgs>
    approvedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approval"]>

  export type ApprovalSelectScalar = {
    id?: boolean
    brandId?: boolean
    approvedById?: boolean
    approvedAt?: boolean
  }

  export type ApprovalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brandId" | "approvedById" | "approvedAt", ExtArgs["result"]["approval"]>
  export type ApprovalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | StationBrandDefaultArgs<ExtArgs>
    approvedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApprovalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | StationBrandDefaultArgs<ExtArgs>
    approvedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApprovalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | StationBrandDefaultArgs<ExtArgs>
    approvedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApprovalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Approval"
    objects: {
      brand: Prisma.$StationBrandPayload<ExtArgs>
      approvedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      brandId: number
      approvedById: number
      approvedAt: Date
    }, ExtArgs["result"]["approval"]>
    composites: {}
  }

  type ApprovalGetPayload<S extends boolean | null | undefined | ApprovalDefaultArgs> = $Result.GetResult<Prisma.$ApprovalPayload, S>

  type ApprovalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprovalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprovalCountAggregateInputType | true
    }

  export interface ApprovalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Approval'], meta: { name: 'Approval' } }
    /**
     * Find zero or one Approval that matches the filter.
     * @param {ApprovalFindUniqueArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalFindUniqueArgs>(args: SelectSubset<T, ApprovalFindUniqueArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Approval that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovalFindUniqueOrThrowArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Approval that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindFirstArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalFindFirstArgs>(args?: SelectSubset<T, ApprovalFindFirstArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Approval that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindFirstOrThrowArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Approvals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Approvals
     * const approvals = await prisma.approval.findMany()
     * 
     * // Get first 10 Approvals
     * const approvals = await prisma.approval.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approvalWithIdOnly = await prisma.approval.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprovalFindManyArgs>(args?: SelectSubset<T, ApprovalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Approval.
     * @param {ApprovalCreateArgs} args - Arguments to create a Approval.
     * @example
     * // Create one Approval
     * const Approval = await prisma.approval.create({
     *   data: {
     *     // ... data to create a Approval
     *   }
     * })
     * 
     */
    create<T extends ApprovalCreateArgs>(args: SelectSubset<T, ApprovalCreateArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Approvals.
     * @param {ApprovalCreateManyArgs} args - Arguments to create many Approvals.
     * @example
     * // Create many Approvals
     * const approval = await prisma.approval.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovalCreateManyArgs>(args?: SelectSubset<T, ApprovalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Approvals and returns the data saved in the database.
     * @param {ApprovalCreateManyAndReturnArgs} args - Arguments to create many Approvals.
     * @example
     * // Create many Approvals
     * const approval = await prisma.approval.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Approvals and only return the `id`
     * const approvalWithIdOnly = await prisma.approval.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApprovalCreateManyAndReturnArgs>(args?: SelectSubset<T, ApprovalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Approval.
     * @param {ApprovalDeleteArgs} args - Arguments to delete one Approval.
     * @example
     * // Delete one Approval
     * const Approval = await prisma.approval.delete({
     *   where: {
     *     // ... filter to delete one Approval
     *   }
     * })
     * 
     */
    delete<T extends ApprovalDeleteArgs>(args: SelectSubset<T, ApprovalDeleteArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Approval.
     * @param {ApprovalUpdateArgs} args - Arguments to update one Approval.
     * @example
     * // Update one Approval
     * const approval = await prisma.approval.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovalUpdateArgs>(args: SelectSubset<T, ApprovalUpdateArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Approvals.
     * @param {ApprovalDeleteManyArgs} args - Arguments to filter Approvals to delete.
     * @example
     * // Delete a few Approvals
     * const { count } = await prisma.approval.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovalDeleteManyArgs>(args?: SelectSubset<T, ApprovalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Approvals
     * const approval = await prisma.approval.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovalUpdateManyArgs>(args: SelectSubset<T, ApprovalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Approvals and returns the data updated in the database.
     * @param {ApprovalUpdateManyAndReturnArgs} args - Arguments to update many Approvals.
     * @example
     * // Update many Approvals
     * const approval = await prisma.approval.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Approvals and only return the `id`
     * const approvalWithIdOnly = await prisma.approval.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApprovalUpdateManyAndReturnArgs>(args: SelectSubset<T, ApprovalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Approval.
     * @param {ApprovalUpsertArgs} args - Arguments to update or create a Approval.
     * @example
     * // Update or create a Approval
     * const approval = await prisma.approval.upsert({
     *   create: {
     *     // ... data to create a Approval
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Approval we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalUpsertArgs>(args: SelectSubset<T, ApprovalUpsertArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalCountArgs} args - Arguments to filter Approvals to count.
     * @example
     * // Count the number of Approvals
     * const count = await prisma.approval.count({
     *   where: {
     *     // ... the filter for the Approvals we want to count
     *   }
     * })
    **/
    count<T extends ApprovalCountArgs>(
      args?: Subset<T, ApprovalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Approval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApprovalAggregateArgs>(args: Subset<T, ApprovalAggregateArgs>): Prisma.PrismaPromise<GetApprovalAggregateType<T>>

    /**
     * Group by Approval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApprovalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovalGroupByArgs['orderBy'] }
        : { orderBy?: ApprovalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApprovalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Approval model
   */
  readonly fields: ApprovalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Approval.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends StationBrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationBrandDefaultArgs<ExtArgs>>): Prisma__StationBrandClient<$Result.GetResult<Prisma.$StationBrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Approval model
   */
  interface ApprovalFieldRefs {
    readonly id: FieldRef<"Approval", 'Int'>
    readonly brandId: FieldRef<"Approval", 'Int'>
    readonly approvedById: FieldRef<"Approval", 'Int'>
    readonly approvedAt: FieldRef<"Approval", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Approval findUnique
   */
  export type ApprovalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval findUniqueOrThrow
   */
  export type ApprovalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval findFirst
   */
  export type ApprovalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Approvals.
     */
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval findFirstOrThrow
   */
  export type ApprovalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Approvals.
     */
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval findMany
   */
  export type ApprovalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approvals to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval create
   */
  export type ApprovalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The data needed to create a Approval.
     */
    data: XOR<ApprovalCreateInput, ApprovalUncheckedCreateInput>
  }

  /**
   * Approval createMany
   */
  export type ApprovalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Approvals.
     */
    data: ApprovalCreateManyInput | ApprovalCreateManyInput[]
  }

  /**
   * Approval createManyAndReturn
   */
  export type ApprovalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * The data used to create many Approvals.
     */
    data: ApprovalCreateManyInput | ApprovalCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Approval update
   */
  export type ApprovalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The data needed to update a Approval.
     */
    data: XOR<ApprovalUpdateInput, ApprovalUncheckedUpdateInput>
    /**
     * Choose, which Approval to update.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval updateMany
   */
  export type ApprovalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Approvals.
     */
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyInput>
    /**
     * Filter which Approvals to update
     */
    where?: ApprovalWhereInput
    /**
     * Limit how many Approvals to update.
     */
    limit?: number
  }

  /**
   * Approval updateManyAndReturn
   */
  export type ApprovalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * The data used to update Approvals.
     */
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyInput>
    /**
     * Filter which Approvals to update
     */
    where?: ApprovalWhereInput
    /**
     * Limit how many Approvals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Approval upsert
   */
  export type ApprovalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The filter to search for the Approval to update in case it exists.
     */
    where: ApprovalWhereUniqueInput
    /**
     * In case the Approval found by the `where` argument doesn't exist, create a new Approval with this data.
     */
    create: XOR<ApprovalCreateInput, ApprovalUncheckedCreateInput>
    /**
     * In case the Approval was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovalUpdateInput, ApprovalUncheckedUpdateInput>
  }

  /**
   * Approval delete
   */
  export type ApprovalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter which Approval to delete.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval deleteMany
   */
  export type ApprovalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Approvals to delete
     */
    where?: ApprovalWhereInput
    /**
     * Limit how many Approvals to delete.
     */
    limit?: number
  }

  /**
   * Approval without action
   */
  export type ApprovalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
  }


  /**
   * Model SeoSetting
   */

  export type AggregateSeoSetting = {
    _count: SeoSettingCountAggregateOutputType | null
    _avg: SeoSettingAvgAggregateOutputType | null
    _sum: SeoSettingSumAggregateOutputType | null
    _min: SeoSettingMinAggregateOutputType | null
    _max: SeoSettingMaxAggregateOutputType | null
  }

  export type SeoSettingAvgAggregateOutputType = {
    id: number | null
  }

  export type SeoSettingSumAggregateOutputType = {
    id: number | null
  }

  export type SeoSettingMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type SeoSettingMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type SeoSettingCountAggregateOutputType = {
    id: number
    title: number
    description: number
    updatedAt: number
    _all: number
  }


  export type SeoSettingAvgAggregateInputType = {
    id?: true
  }

  export type SeoSettingSumAggregateInputType = {
    id?: true
  }

  export type SeoSettingMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    updatedAt?: true
  }

  export type SeoSettingMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    updatedAt?: true
  }

  export type SeoSettingCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    updatedAt?: true
    _all?: true
  }

  export type SeoSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeoSetting to aggregate.
     */
    where?: SeoSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoSettings to fetch.
     */
    orderBy?: SeoSettingOrderByWithRelationInput | SeoSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeoSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeoSettings
    **/
    _count?: true | SeoSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeoSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeoSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeoSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeoSettingMaxAggregateInputType
  }

  export type GetSeoSettingAggregateType<T extends SeoSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSeoSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeoSetting[P]>
      : GetScalarType<T[P], AggregateSeoSetting[P]>
  }




  export type SeoSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeoSettingWhereInput
    orderBy?: SeoSettingOrderByWithAggregationInput | SeoSettingOrderByWithAggregationInput[]
    by: SeoSettingScalarFieldEnum[] | SeoSettingScalarFieldEnum
    having?: SeoSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeoSettingCountAggregateInputType | true
    _avg?: SeoSettingAvgAggregateInputType
    _sum?: SeoSettingSumAggregateInputType
    _min?: SeoSettingMinAggregateInputType
    _max?: SeoSettingMaxAggregateInputType
  }

  export type SeoSettingGroupByOutputType = {
    id: number
    title: string
    description: string
    updatedAt: Date
    _count: SeoSettingCountAggregateOutputType | null
    _avg: SeoSettingAvgAggregateOutputType | null
    _sum: SeoSettingSumAggregateOutputType | null
    _min: SeoSettingMinAggregateOutputType | null
    _max: SeoSettingMaxAggregateOutputType | null
  }

  type GetSeoSettingGroupByPayload<T extends SeoSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeoSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeoSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeoSettingGroupByOutputType[P]>
            : GetScalarType<T[P], SeoSettingGroupByOutputType[P]>
        }
      >
    >


  export type SeoSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["seoSetting"]>

  export type SeoSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["seoSetting"]>

  export type SeoSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["seoSetting"]>

  export type SeoSettingSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    updatedAt?: boolean
  }

  export type SeoSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "updatedAt", ExtArgs["result"]["seoSetting"]>

  export type $SeoSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeoSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      updatedAt: Date
    }, ExtArgs["result"]["seoSetting"]>
    composites: {}
  }

  type SeoSettingGetPayload<S extends boolean | null | undefined | SeoSettingDefaultArgs> = $Result.GetResult<Prisma.$SeoSettingPayload, S>

  type SeoSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeoSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeoSettingCountAggregateInputType | true
    }

  export interface SeoSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeoSetting'], meta: { name: 'SeoSetting' } }
    /**
     * Find zero or one SeoSetting that matches the filter.
     * @param {SeoSettingFindUniqueArgs} args - Arguments to find a SeoSetting
     * @example
     * // Get one SeoSetting
     * const seoSetting = await prisma.seoSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeoSettingFindUniqueArgs>(args: SelectSubset<T, SeoSettingFindUniqueArgs<ExtArgs>>): Prisma__SeoSettingClient<$Result.GetResult<Prisma.$SeoSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeoSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeoSettingFindUniqueOrThrowArgs} args - Arguments to find a SeoSetting
     * @example
     * // Get one SeoSetting
     * const seoSetting = await prisma.seoSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeoSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SeoSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeoSettingClient<$Result.GetResult<Prisma.$SeoSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeoSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoSettingFindFirstArgs} args - Arguments to find a SeoSetting
     * @example
     * // Get one SeoSetting
     * const seoSetting = await prisma.seoSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeoSettingFindFirstArgs>(args?: SelectSubset<T, SeoSettingFindFirstArgs<ExtArgs>>): Prisma__SeoSettingClient<$Result.GetResult<Prisma.$SeoSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeoSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoSettingFindFirstOrThrowArgs} args - Arguments to find a SeoSetting
     * @example
     * // Get one SeoSetting
     * const seoSetting = await prisma.seoSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeoSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SeoSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeoSettingClient<$Result.GetResult<Prisma.$SeoSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeoSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeoSettings
     * const seoSettings = await prisma.seoSetting.findMany()
     * 
     * // Get first 10 SeoSettings
     * const seoSettings = await prisma.seoSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seoSettingWithIdOnly = await prisma.seoSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeoSettingFindManyArgs>(args?: SelectSubset<T, SeoSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeoSetting.
     * @param {SeoSettingCreateArgs} args - Arguments to create a SeoSetting.
     * @example
     * // Create one SeoSetting
     * const SeoSetting = await prisma.seoSetting.create({
     *   data: {
     *     // ... data to create a SeoSetting
     *   }
     * })
     * 
     */
    create<T extends SeoSettingCreateArgs>(args: SelectSubset<T, SeoSettingCreateArgs<ExtArgs>>): Prisma__SeoSettingClient<$Result.GetResult<Prisma.$SeoSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeoSettings.
     * @param {SeoSettingCreateManyArgs} args - Arguments to create many SeoSettings.
     * @example
     * // Create many SeoSettings
     * const seoSetting = await prisma.seoSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeoSettingCreateManyArgs>(args?: SelectSubset<T, SeoSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeoSettings and returns the data saved in the database.
     * @param {SeoSettingCreateManyAndReturnArgs} args - Arguments to create many SeoSettings.
     * @example
     * // Create many SeoSettings
     * const seoSetting = await prisma.seoSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeoSettings and only return the `id`
     * const seoSettingWithIdOnly = await prisma.seoSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeoSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SeoSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeoSetting.
     * @param {SeoSettingDeleteArgs} args - Arguments to delete one SeoSetting.
     * @example
     * // Delete one SeoSetting
     * const SeoSetting = await prisma.seoSetting.delete({
     *   where: {
     *     // ... filter to delete one SeoSetting
     *   }
     * })
     * 
     */
    delete<T extends SeoSettingDeleteArgs>(args: SelectSubset<T, SeoSettingDeleteArgs<ExtArgs>>): Prisma__SeoSettingClient<$Result.GetResult<Prisma.$SeoSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeoSetting.
     * @param {SeoSettingUpdateArgs} args - Arguments to update one SeoSetting.
     * @example
     * // Update one SeoSetting
     * const seoSetting = await prisma.seoSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeoSettingUpdateArgs>(args: SelectSubset<T, SeoSettingUpdateArgs<ExtArgs>>): Prisma__SeoSettingClient<$Result.GetResult<Prisma.$SeoSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeoSettings.
     * @param {SeoSettingDeleteManyArgs} args - Arguments to filter SeoSettings to delete.
     * @example
     * // Delete a few SeoSettings
     * const { count } = await prisma.seoSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeoSettingDeleteManyArgs>(args?: SelectSubset<T, SeoSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeoSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeoSettings
     * const seoSetting = await prisma.seoSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeoSettingUpdateManyArgs>(args: SelectSubset<T, SeoSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeoSettings and returns the data updated in the database.
     * @param {SeoSettingUpdateManyAndReturnArgs} args - Arguments to update many SeoSettings.
     * @example
     * // Update many SeoSettings
     * const seoSetting = await prisma.seoSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeoSettings and only return the `id`
     * const seoSettingWithIdOnly = await prisma.seoSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeoSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SeoSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeoSetting.
     * @param {SeoSettingUpsertArgs} args - Arguments to update or create a SeoSetting.
     * @example
     * // Update or create a SeoSetting
     * const seoSetting = await prisma.seoSetting.upsert({
     *   create: {
     *     // ... data to create a SeoSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeoSetting we want to update
     *   }
     * })
     */
    upsert<T extends SeoSettingUpsertArgs>(args: SelectSubset<T, SeoSettingUpsertArgs<ExtArgs>>): Prisma__SeoSettingClient<$Result.GetResult<Prisma.$SeoSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeoSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoSettingCountArgs} args - Arguments to filter SeoSettings to count.
     * @example
     * // Count the number of SeoSettings
     * const count = await prisma.seoSetting.count({
     *   where: {
     *     // ... the filter for the SeoSettings we want to count
     *   }
     * })
    **/
    count<T extends SeoSettingCountArgs>(
      args?: Subset<T, SeoSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeoSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeoSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeoSettingAggregateArgs>(args: Subset<T, SeoSettingAggregateArgs>): Prisma.PrismaPromise<GetSeoSettingAggregateType<T>>

    /**
     * Group by SeoSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeoSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeoSettingGroupByArgs['orderBy'] }
        : { orderBy?: SeoSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeoSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeoSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeoSetting model
   */
  readonly fields: SeoSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeoSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeoSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SeoSetting model
   */
  interface SeoSettingFieldRefs {
    readonly id: FieldRef<"SeoSetting", 'Int'>
    readonly title: FieldRef<"SeoSetting", 'String'>
    readonly description: FieldRef<"SeoSetting", 'String'>
    readonly updatedAt: FieldRef<"SeoSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeoSetting findUnique
   */
  export type SeoSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSetting
     */
    select?: SeoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSetting
     */
    omit?: SeoSettingOmit<ExtArgs> | null
    /**
     * Filter, which SeoSetting to fetch.
     */
    where: SeoSettingWhereUniqueInput
  }

  /**
   * SeoSetting findUniqueOrThrow
   */
  export type SeoSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSetting
     */
    select?: SeoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSetting
     */
    omit?: SeoSettingOmit<ExtArgs> | null
    /**
     * Filter, which SeoSetting to fetch.
     */
    where: SeoSettingWhereUniqueInput
  }

  /**
   * SeoSetting findFirst
   */
  export type SeoSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSetting
     */
    select?: SeoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSetting
     */
    omit?: SeoSettingOmit<ExtArgs> | null
    /**
     * Filter, which SeoSetting to fetch.
     */
    where?: SeoSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoSettings to fetch.
     */
    orderBy?: SeoSettingOrderByWithRelationInput | SeoSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeoSettings.
     */
    cursor?: SeoSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoSettings.
     */
    distinct?: SeoSettingScalarFieldEnum | SeoSettingScalarFieldEnum[]
  }

  /**
   * SeoSetting findFirstOrThrow
   */
  export type SeoSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSetting
     */
    select?: SeoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSetting
     */
    omit?: SeoSettingOmit<ExtArgs> | null
    /**
     * Filter, which SeoSetting to fetch.
     */
    where?: SeoSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoSettings to fetch.
     */
    orderBy?: SeoSettingOrderByWithRelationInput | SeoSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeoSettings.
     */
    cursor?: SeoSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoSettings.
     */
    distinct?: SeoSettingScalarFieldEnum | SeoSettingScalarFieldEnum[]
  }

  /**
   * SeoSetting findMany
   */
  export type SeoSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSetting
     */
    select?: SeoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSetting
     */
    omit?: SeoSettingOmit<ExtArgs> | null
    /**
     * Filter, which SeoSettings to fetch.
     */
    where?: SeoSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoSettings to fetch.
     */
    orderBy?: SeoSettingOrderByWithRelationInput | SeoSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeoSettings.
     */
    cursor?: SeoSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoSettings.
     */
    skip?: number
    distinct?: SeoSettingScalarFieldEnum | SeoSettingScalarFieldEnum[]
  }

  /**
   * SeoSetting create
   */
  export type SeoSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSetting
     */
    select?: SeoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSetting
     */
    omit?: SeoSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a SeoSetting.
     */
    data: XOR<SeoSettingCreateInput, SeoSettingUncheckedCreateInput>
  }

  /**
   * SeoSetting createMany
   */
  export type SeoSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeoSettings.
     */
    data: SeoSettingCreateManyInput | SeoSettingCreateManyInput[]
  }

  /**
   * SeoSetting createManyAndReturn
   */
  export type SeoSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSetting
     */
    select?: SeoSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSetting
     */
    omit?: SeoSettingOmit<ExtArgs> | null
    /**
     * The data used to create many SeoSettings.
     */
    data: SeoSettingCreateManyInput | SeoSettingCreateManyInput[]
  }

  /**
   * SeoSetting update
   */
  export type SeoSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSetting
     */
    select?: SeoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSetting
     */
    omit?: SeoSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a SeoSetting.
     */
    data: XOR<SeoSettingUpdateInput, SeoSettingUncheckedUpdateInput>
    /**
     * Choose, which SeoSetting to update.
     */
    where: SeoSettingWhereUniqueInput
  }

  /**
   * SeoSetting updateMany
   */
  export type SeoSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeoSettings.
     */
    data: XOR<SeoSettingUpdateManyMutationInput, SeoSettingUncheckedUpdateManyInput>
    /**
     * Filter which SeoSettings to update
     */
    where?: SeoSettingWhereInput
    /**
     * Limit how many SeoSettings to update.
     */
    limit?: number
  }

  /**
   * SeoSetting updateManyAndReturn
   */
  export type SeoSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSetting
     */
    select?: SeoSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSetting
     */
    omit?: SeoSettingOmit<ExtArgs> | null
    /**
     * The data used to update SeoSettings.
     */
    data: XOR<SeoSettingUpdateManyMutationInput, SeoSettingUncheckedUpdateManyInput>
    /**
     * Filter which SeoSettings to update
     */
    where?: SeoSettingWhereInput
    /**
     * Limit how many SeoSettings to update.
     */
    limit?: number
  }

  /**
   * SeoSetting upsert
   */
  export type SeoSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSetting
     */
    select?: SeoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSetting
     */
    omit?: SeoSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the SeoSetting to update in case it exists.
     */
    where: SeoSettingWhereUniqueInput
    /**
     * In case the SeoSetting found by the `where` argument doesn't exist, create a new SeoSetting with this data.
     */
    create: XOR<SeoSettingCreateInput, SeoSettingUncheckedCreateInput>
    /**
     * In case the SeoSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeoSettingUpdateInput, SeoSettingUncheckedUpdateInput>
  }

  /**
   * SeoSetting delete
   */
  export type SeoSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSetting
     */
    select?: SeoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSetting
     */
    omit?: SeoSettingOmit<ExtArgs> | null
    /**
     * Filter which SeoSetting to delete.
     */
    where: SeoSettingWhereUniqueInput
  }

  /**
   * SeoSetting deleteMany
   */
  export type SeoSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeoSettings to delete
     */
    where?: SeoSettingWhereInput
    /**
     * Limit how many SeoSettings to delete.
     */
    limit?: number
  }

  /**
   * SeoSetting without action
   */
  export type SeoSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSetting
     */
    select?: SeoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSetting
     */
    omit?: SeoSettingOmit<ExtArgs> | null
  }


  /**
   * Model SiteSetting
   */

  export type AggregateSiteSetting = {
    _count: SiteSettingCountAggregateOutputType | null
    _avg: SiteSettingAvgAggregateOutputType | null
    _sum: SiteSettingSumAggregateOutputType | null
    _min: SiteSettingMinAggregateOutputType | null
    _max: SiteSettingMaxAggregateOutputType | null
  }

  export type SiteSettingAvgAggregateOutputType = {
    id: number | null
  }

  export type SiteSettingSumAggregateOutputType = {
    id: number | null
  }

  export type SiteSettingMinAggregateOutputType = {
    id: number | null
    gtmCode: string | null
    updatedAt: Date | null
  }

  export type SiteSettingMaxAggregateOutputType = {
    id: number | null
    gtmCode: string | null
    updatedAt: Date | null
  }

  export type SiteSettingCountAggregateOutputType = {
    id: number
    gtmCode: number
    updatedAt: number
    _all: number
  }


  export type SiteSettingAvgAggregateInputType = {
    id?: true
  }

  export type SiteSettingSumAggregateInputType = {
    id?: true
  }

  export type SiteSettingMinAggregateInputType = {
    id?: true
    gtmCode?: true
    updatedAt?: true
  }

  export type SiteSettingMaxAggregateInputType = {
    id?: true
    gtmCode?: true
    updatedAt?: true
  }

  export type SiteSettingCountAggregateInputType = {
    id?: true
    gtmCode?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSetting to aggregate.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteSettings
    **/
    _count?: true | SiteSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteSettingMaxAggregateInputType
  }

  export type GetSiteSettingAggregateType<T extends SiteSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteSetting[P]>
      : GetScalarType<T[P], AggregateSiteSetting[P]>
  }




  export type SiteSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteSettingWhereInput
    orderBy?: SiteSettingOrderByWithAggregationInput | SiteSettingOrderByWithAggregationInput[]
    by: SiteSettingScalarFieldEnum[] | SiteSettingScalarFieldEnum
    having?: SiteSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteSettingCountAggregateInputType | true
    _avg?: SiteSettingAvgAggregateInputType
    _sum?: SiteSettingSumAggregateInputType
    _min?: SiteSettingMinAggregateInputType
    _max?: SiteSettingMaxAggregateInputType
  }

  export type SiteSettingGroupByOutputType = {
    id: number
    gtmCode: string
    updatedAt: Date
    _count: SiteSettingCountAggregateOutputType | null
    _avg: SiteSettingAvgAggregateOutputType | null
    _sum: SiteSettingSumAggregateOutputType | null
    _min: SiteSettingMinAggregateOutputType | null
    _max: SiteSettingMaxAggregateOutputType | null
  }

  type GetSiteSettingGroupByPayload<T extends SiteSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteSettingGroupByOutputType[P]>
            : GetScalarType<T[P], SiteSettingGroupByOutputType[P]>
        }
      >
    >


  export type SiteSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gtmCode?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSetting"]>

  export type SiteSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gtmCode?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSetting"]>

  export type SiteSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gtmCode?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSetting"]>

  export type SiteSettingSelectScalar = {
    id?: boolean
    gtmCode?: boolean
    updatedAt?: boolean
  }

  export type SiteSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gtmCode" | "updatedAt", ExtArgs["result"]["siteSetting"]>

  export type $SiteSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gtmCode: string
      updatedAt: Date
    }, ExtArgs["result"]["siteSetting"]>
    composites: {}
  }

  type SiteSettingGetPayload<S extends boolean | null | undefined | SiteSettingDefaultArgs> = $Result.GetResult<Prisma.$SiteSettingPayload, S>

  type SiteSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteSettingCountAggregateInputType | true
    }

  export interface SiteSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteSetting'], meta: { name: 'SiteSetting' } }
    /**
     * Find zero or one SiteSetting that matches the filter.
     * @param {SiteSettingFindUniqueArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteSettingFindUniqueArgs>(args: SelectSubset<T, SiteSettingFindUniqueArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteSettingFindUniqueOrThrowArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingFindFirstArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteSettingFindFirstArgs>(args?: SelectSubset<T, SiteSettingFindFirstArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingFindFirstOrThrowArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteSettings
     * const siteSettings = await prisma.siteSetting.findMany()
     * 
     * // Get first 10 SiteSettings
     * const siteSettings = await prisma.siteSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteSettingWithIdOnly = await prisma.siteSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteSettingFindManyArgs>(args?: SelectSubset<T, SiteSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteSetting.
     * @param {SiteSettingCreateArgs} args - Arguments to create a SiteSetting.
     * @example
     * // Create one SiteSetting
     * const SiteSetting = await prisma.siteSetting.create({
     *   data: {
     *     // ... data to create a SiteSetting
     *   }
     * })
     * 
     */
    create<T extends SiteSettingCreateArgs>(args: SelectSubset<T, SiteSettingCreateArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteSettings.
     * @param {SiteSettingCreateManyArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSetting = await prisma.siteSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteSettingCreateManyArgs>(args?: SelectSubset<T, SiteSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteSettings and returns the data saved in the database.
     * @param {SiteSettingCreateManyAndReturnArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSetting = await prisma.siteSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteSettings and only return the `id`
     * const siteSettingWithIdOnly = await prisma.siteSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteSetting.
     * @param {SiteSettingDeleteArgs} args - Arguments to delete one SiteSetting.
     * @example
     * // Delete one SiteSetting
     * const SiteSetting = await prisma.siteSetting.delete({
     *   where: {
     *     // ... filter to delete one SiteSetting
     *   }
     * })
     * 
     */
    delete<T extends SiteSettingDeleteArgs>(args: SelectSubset<T, SiteSettingDeleteArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteSetting.
     * @param {SiteSettingUpdateArgs} args - Arguments to update one SiteSetting.
     * @example
     * // Update one SiteSetting
     * const siteSetting = await prisma.siteSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteSettingUpdateArgs>(args: SelectSubset<T, SiteSettingUpdateArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteSettings.
     * @param {SiteSettingDeleteManyArgs} args - Arguments to filter SiteSettings to delete.
     * @example
     * // Delete a few SiteSettings
     * const { count } = await prisma.siteSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteSettingDeleteManyArgs>(args?: SelectSubset<T, SiteSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteSettings
     * const siteSetting = await prisma.siteSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteSettingUpdateManyArgs>(args: SelectSubset<T, SiteSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettings and returns the data updated in the database.
     * @param {SiteSettingUpdateManyAndReturnArgs} args - Arguments to update many SiteSettings.
     * @example
     * // Update many SiteSettings
     * const siteSetting = await prisma.siteSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteSettings and only return the `id`
     * const siteSettingWithIdOnly = await prisma.siteSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteSetting.
     * @param {SiteSettingUpsertArgs} args - Arguments to update or create a SiteSetting.
     * @example
     * // Update or create a SiteSetting
     * const siteSetting = await prisma.siteSetting.upsert({
     *   create: {
     *     // ... data to create a SiteSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteSetting we want to update
     *   }
     * })
     */
    upsert<T extends SiteSettingUpsertArgs>(args: SelectSubset<T, SiteSettingUpsertArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingCountArgs} args - Arguments to filter SiteSettings to count.
     * @example
     * // Count the number of SiteSettings
     * const count = await prisma.siteSetting.count({
     *   where: {
     *     // ... the filter for the SiteSettings we want to count
     *   }
     * })
    **/
    count<T extends SiteSettingCountArgs>(
      args?: Subset<T, SiteSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteSettingAggregateArgs>(args: Subset<T, SiteSettingAggregateArgs>): Prisma.PrismaPromise<GetSiteSettingAggregateType<T>>

    /**
     * Group by SiteSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteSettingGroupByArgs['orderBy'] }
        : { orderBy?: SiteSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteSetting model
   */
  readonly fields: SiteSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteSetting model
   */
  interface SiteSettingFieldRefs {
    readonly id: FieldRef<"SiteSetting", 'Int'>
    readonly gtmCode: FieldRef<"SiteSetting", 'String'>
    readonly updatedAt: FieldRef<"SiteSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteSetting findUnique
   */
  export type SiteSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting findUniqueOrThrow
   */
  export type SiteSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting findFirst
   */
  export type SiteSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingScalarFieldEnum | SiteSettingScalarFieldEnum[]
  }

  /**
   * SiteSetting findFirstOrThrow
   */
  export type SiteSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingScalarFieldEnum | SiteSettingScalarFieldEnum[]
  }

  /**
   * SiteSetting findMany
   */
  export type SiteSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteSettings.
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    distinct?: SiteSettingScalarFieldEnum | SiteSettingScalarFieldEnum[]
  }

  /**
   * SiteSetting create
   */
  export type SiteSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a SiteSetting.
     */
    data: XOR<SiteSettingCreateInput, SiteSettingUncheckedCreateInput>
  }

  /**
   * SiteSetting createMany
   */
  export type SiteSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingCreateManyInput | SiteSettingCreateManyInput[]
  }

  /**
   * SiteSetting createManyAndReturn
   */
  export type SiteSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingCreateManyInput | SiteSettingCreateManyInput[]
  }

  /**
   * SiteSetting update
   */
  export type SiteSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a SiteSetting.
     */
    data: XOR<SiteSettingUpdateInput, SiteSettingUncheckedUpdateInput>
    /**
     * Choose, which SiteSetting to update.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting updateMany
   */
  export type SiteSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteSettings.
     */
    data: XOR<SiteSettingUpdateManyMutationInput, SiteSettingUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettings to update
     */
    where?: SiteSettingWhereInput
    /**
     * Limit how many SiteSettings to update.
     */
    limit?: number
  }

  /**
   * SiteSetting updateManyAndReturn
   */
  export type SiteSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * The data used to update SiteSettings.
     */
    data: XOR<SiteSettingUpdateManyMutationInput, SiteSettingUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettings to update
     */
    where?: SiteSettingWhereInput
    /**
     * Limit how many SiteSettings to update.
     */
    limit?: number
  }

  /**
   * SiteSetting upsert
   */
  export type SiteSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the SiteSetting to update in case it exists.
     */
    where: SiteSettingWhereUniqueInput
    /**
     * In case the SiteSetting found by the `where` argument doesn't exist, create a new SiteSetting with this data.
     */
    create: XOR<SiteSettingCreateInput, SiteSettingUncheckedCreateInput>
    /**
     * In case the SiteSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteSettingUpdateInput, SiteSettingUncheckedUpdateInput>
  }

  /**
   * SiteSetting delete
   */
  export type SiteSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter which SiteSetting to delete.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting deleteMany
   */
  export type SiteSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettings to delete
     */
    where?: SiteSettingWhereInput
    /**
     * Limit how many SiteSettings to delete.
     */
    limit?: number
  }

  /**
   * SiteSetting without action
   */
  export type SiteSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
  }


  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
    consumption: number | null
    wltpRange: number | null
    sortOrder: number | null
  }

  export type CarSumAggregateOutputType = {
    id: number | null
    capacity: number | null
    consumption: number | null
    wltpRange: number | null
    sortOrder: number | null
  }

  export type CarMinAggregateOutputType = {
    id: number | null
    brand: string | null
    model: string | null
    capacity: number | null
    consumption: number | null
    wltpRange: number | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarMaxAggregateOutputType = {
    id: number | null
    brand: string | null
    model: string | null
    capacity: number | null
    consumption: number | null
    wltpRange: number | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    brand: number
    model: number
    capacity: number
    consumption: number
    wltpRange: number
    isActive: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    id?: true
    capacity?: true
    consumption?: true
    wltpRange?: true
    sortOrder?: true
  }

  export type CarSumAggregateInputType = {
    id?: true
    capacity?: true
    consumption?: true
    wltpRange?: true
    sortOrder?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    capacity?: true
    consumption?: true
    wltpRange?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    capacity?: true
    consumption?: true
    wltpRange?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    capacity?: true
    consumption?: true
    wltpRange?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: number
    brand: string
    model: string
    capacity: number
    consumption: number
    wltpRange: number
    isActive: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    capacity?: boolean
    consumption?: boolean
    wltpRange?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    capacity?: boolean
    consumption?: boolean
    wltpRange?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    capacity?: boolean
    consumption?: boolean
    wltpRange?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    brand?: boolean
    model?: boolean
    capacity?: boolean
    consumption?: boolean
    wltpRange?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brand" | "model" | "capacity" | "consumption" | "wltpRange" | "isActive" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["car"]>

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      brand: string
      model: string
      capacity: number
      consumption: number
      wltpRange: number
      isActive: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'Int'>
    readonly brand: FieldRef<"Car", 'String'>
    readonly model: FieldRef<"Car", 'String'>
    readonly capacity: FieldRef<"Car", 'Float'>
    readonly consumption: FieldRef<"Car", 'Float'>
    readonly wltpRange: FieldRef<"Car", 'Int'>
    readonly isActive: FieldRef<"Car", 'Boolean'>
    readonly sortOrder: FieldRef<"Car", 'Int'>
    readonly createdAt: FieldRef<"Car", 'DateTime'>
    readonly updatedAt: FieldRef<"Car", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StationOptionScalarFieldEnum: {
    id: 'id',
    socketType: 'socketType',
    power: 'power',
    priceAmount: 'priceAmount',
    priceUnit: 'priceUnit',
    brandId: 'brandId'
  };

  export type StationOptionScalarFieldEnum = (typeof StationOptionScalarFieldEnum)[keyof typeof StationOptionScalarFieldEnum]


  export const StationBrandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sourceUrl: 'sourceUrl',
    createdById: 'createdById',
    approved: 'approved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StationBrandScalarFieldEnum = (typeof StationBrandScalarFieldEnum)[keyof typeof StationBrandScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    isAdmin: 'isAdmin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ApprovalScalarFieldEnum: {
    id: 'id',
    brandId: 'brandId',
    approvedById: 'approvedById',
    approvedAt: 'approvedAt'
  };

  export type ApprovalScalarFieldEnum = (typeof ApprovalScalarFieldEnum)[keyof typeof ApprovalScalarFieldEnum]


  export const SeoSettingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    updatedAt: 'updatedAt'
  };

  export type SeoSettingScalarFieldEnum = (typeof SeoSettingScalarFieldEnum)[keyof typeof SeoSettingScalarFieldEnum]


  export const SiteSettingScalarFieldEnum: {
    id: 'id',
    gtmCode: 'gtmCode',
    updatedAt: 'updatedAt'
  };

  export type SiteSettingScalarFieldEnum = (typeof SiteSettingScalarFieldEnum)[keyof typeof SiteSettingScalarFieldEnum]


  export const CarScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    model: 'model',
    capacity: 'capacity',
    consumption: 'consumption',
    wltpRange: 'wltpRange',
    isActive: 'isActive',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type StationOptionWhereInput = {
    AND?: StationOptionWhereInput | StationOptionWhereInput[]
    OR?: StationOptionWhereInput[]
    NOT?: StationOptionWhereInput | StationOptionWhereInput[]
    id?: IntFilter<"StationOption"> | number
    socketType?: StringFilter<"StationOption"> | string
    power?: StringFilter<"StationOption"> | string
    priceAmount?: FloatFilter<"StationOption"> | number
    priceUnit?: StringFilter<"StationOption"> | string
    brandId?: IntFilter<"StationOption"> | number
    brand?: XOR<StationBrandScalarRelationFilter, StationBrandWhereInput>
  }

  export type StationOptionOrderByWithRelationInput = {
    id?: SortOrder
    socketType?: SortOrder
    power?: SortOrder
    priceAmount?: SortOrder
    priceUnit?: SortOrder
    brandId?: SortOrder
    brand?: StationBrandOrderByWithRelationInput
  }

  export type StationOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StationOptionWhereInput | StationOptionWhereInput[]
    OR?: StationOptionWhereInput[]
    NOT?: StationOptionWhereInput | StationOptionWhereInput[]
    socketType?: StringFilter<"StationOption"> | string
    power?: StringFilter<"StationOption"> | string
    priceAmount?: FloatFilter<"StationOption"> | number
    priceUnit?: StringFilter<"StationOption"> | string
    brandId?: IntFilter<"StationOption"> | number
    brand?: XOR<StationBrandScalarRelationFilter, StationBrandWhereInput>
  }, "id">

  export type StationOptionOrderByWithAggregationInput = {
    id?: SortOrder
    socketType?: SortOrder
    power?: SortOrder
    priceAmount?: SortOrder
    priceUnit?: SortOrder
    brandId?: SortOrder
    _count?: StationOptionCountOrderByAggregateInput
    _avg?: StationOptionAvgOrderByAggregateInput
    _max?: StationOptionMaxOrderByAggregateInput
    _min?: StationOptionMinOrderByAggregateInput
    _sum?: StationOptionSumOrderByAggregateInput
  }

  export type StationOptionScalarWhereWithAggregatesInput = {
    AND?: StationOptionScalarWhereWithAggregatesInput | StationOptionScalarWhereWithAggregatesInput[]
    OR?: StationOptionScalarWhereWithAggregatesInput[]
    NOT?: StationOptionScalarWhereWithAggregatesInput | StationOptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StationOption"> | number
    socketType?: StringWithAggregatesFilter<"StationOption"> | string
    power?: StringWithAggregatesFilter<"StationOption"> | string
    priceAmount?: FloatWithAggregatesFilter<"StationOption"> | number
    priceUnit?: StringWithAggregatesFilter<"StationOption"> | string
    brandId?: IntWithAggregatesFilter<"StationOption"> | number
  }

  export type StationBrandWhereInput = {
    AND?: StationBrandWhereInput | StationBrandWhereInput[]
    OR?: StationBrandWhereInput[]
    NOT?: StationBrandWhereInput | StationBrandWhereInput[]
    id?: IntFilter<"StationBrand"> | number
    name?: StringFilter<"StationBrand"> | string
    sourceUrl?: StringFilter<"StationBrand"> | string
    createdById?: IntNullableFilter<"StationBrand"> | number | null
    approved?: BoolFilter<"StationBrand"> | boolean
    createdAt?: DateTimeFilter<"StationBrand"> | Date | string
    updatedAt?: DateTimeFilter<"StationBrand"> | Date | string
    options?: StationOptionListRelationFilter
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    approvals?: ApprovalListRelationFilter
  }

  export type StationBrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sourceUrl?: SortOrder
    createdById?: SortOrderInput | SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    options?: StationOptionOrderByRelationAggregateInput
    createdBy?: UserOrderByWithRelationInput
    approvals?: ApprovalOrderByRelationAggregateInput
  }

  export type StationBrandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StationBrandWhereInput | StationBrandWhereInput[]
    OR?: StationBrandWhereInput[]
    NOT?: StationBrandWhereInput | StationBrandWhereInput[]
    name?: StringFilter<"StationBrand"> | string
    sourceUrl?: StringFilter<"StationBrand"> | string
    createdById?: IntNullableFilter<"StationBrand"> | number | null
    approved?: BoolFilter<"StationBrand"> | boolean
    createdAt?: DateTimeFilter<"StationBrand"> | Date | string
    updatedAt?: DateTimeFilter<"StationBrand"> | Date | string
    options?: StationOptionListRelationFilter
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    approvals?: ApprovalListRelationFilter
  }, "id">

  export type StationBrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sourceUrl?: SortOrder
    createdById?: SortOrderInput | SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StationBrandCountOrderByAggregateInput
    _avg?: StationBrandAvgOrderByAggregateInput
    _max?: StationBrandMaxOrderByAggregateInput
    _min?: StationBrandMinOrderByAggregateInput
    _sum?: StationBrandSumOrderByAggregateInput
  }

  export type StationBrandScalarWhereWithAggregatesInput = {
    AND?: StationBrandScalarWhereWithAggregatesInput | StationBrandScalarWhereWithAggregatesInput[]
    OR?: StationBrandScalarWhereWithAggregatesInput[]
    NOT?: StationBrandScalarWhereWithAggregatesInput | StationBrandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StationBrand"> | number
    name?: StringWithAggregatesFilter<"StationBrand"> | string
    sourceUrl?: StringWithAggregatesFilter<"StationBrand"> | string
    createdById?: IntNullableWithAggregatesFilter<"StationBrand"> | number | null
    approved?: BoolWithAggregatesFilter<"StationBrand"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StationBrand"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StationBrand"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    brands?: StationBrandListRelationFilter
    approvalsGiven?: ApprovalListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    brands?: StationBrandOrderByRelationAggregateInput
    approvalsGiven?: ApprovalOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    brands?: StationBrandListRelationFilter
    approvalsGiven?: ApprovalListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type ApprovalWhereInput = {
    AND?: ApprovalWhereInput | ApprovalWhereInput[]
    OR?: ApprovalWhereInput[]
    NOT?: ApprovalWhereInput | ApprovalWhereInput[]
    id?: IntFilter<"Approval"> | number
    brandId?: IntFilter<"Approval"> | number
    approvedById?: IntFilter<"Approval"> | number
    approvedAt?: DateTimeFilter<"Approval"> | Date | string
    brand?: XOR<StationBrandScalarRelationFilter, StationBrandWhereInput>
    approvedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApprovalOrderByWithRelationInput = {
    id?: SortOrder
    brandId?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
    brand?: StationBrandOrderByWithRelationInput
    approvedBy?: UserOrderByWithRelationInput
  }

  export type ApprovalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApprovalWhereInput | ApprovalWhereInput[]
    OR?: ApprovalWhereInput[]
    NOT?: ApprovalWhereInput | ApprovalWhereInput[]
    brandId?: IntFilter<"Approval"> | number
    approvedById?: IntFilter<"Approval"> | number
    approvedAt?: DateTimeFilter<"Approval"> | Date | string
    brand?: XOR<StationBrandScalarRelationFilter, StationBrandWhereInput>
    approvedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ApprovalOrderByWithAggregationInput = {
    id?: SortOrder
    brandId?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
    _count?: ApprovalCountOrderByAggregateInput
    _avg?: ApprovalAvgOrderByAggregateInput
    _max?: ApprovalMaxOrderByAggregateInput
    _min?: ApprovalMinOrderByAggregateInput
    _sum?: ApprovalSumOrderByAggregateInput
  }

  export type ApprovalScalarWhereWithAggregatesInput = {
    AND?: ApprovalScalarWhereWithAggregatesInput | ApprovalScalarWhereWithAggregatesInput[]
    OR?: ApprovalScalarWhereWithAggregatesInput[]
    NOT?: ApprovalScalarWhereWithAggregatesInput | ApprovalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Approval"> | number
    brandId?: IntWithAggregatesFilter<"Approval"> | number
    approvedById?: IntWithAggregatesFilter<"Approval"> | number
    approvedAt?: DateTimeWithAggregatesFilter<"Approval"> | Date | string
  }

  export type SeoSettingWhereInput = {
    AND?: SeoSettingWhereInput | SeoSettingWhereInput[]
    OR?: SeoSettingWhereInput[]
    NOT?: SeoSettingWhereInput | SeoSettingWhereInput[]
    id?: IntFilter<"SeoSetting"> | number
    title?: StringFilter<"SeoSetting"> | string
    description?: StringFilter<"SeoSetting"> | string
    updatedAt?: DateTimeFilter<"SeoSetting"> | Date | string
  }

  export type SeoSettingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeoSettingWhereInput | SeoSettingWhereInput[]
    OR?: SeoSettingWhereInput[]
    NOT?: SeoSettingWhereInput | SeoSettingWhereInput[]
    title?: StringFilter<"SeoSetting"> | string
    description?: StringFilter<"SeoSetting"> | string
    updatedAt?: DateTimeFilter<"SeoSetting"> | Date | string
  }, "id">

  export type SeoSettingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
    _count?: SeoSettingCountOrderByAggregateInput
    _avg?: SeoSettingAvgOrderByAggregateInput
    _max?: SeoSettingMaxOrderByAggregateInput
    _min?: SeoSettingMinOrderByAggregateInput
    _sum?: SeoSettingSumOrderByAggregateInput
  }

  export type SeoSettingScalarWhereWithAggregatesInput = {
    AND?: SeoSettingScalarWhereWithAggregatesInput | SeoSettingScalarWhereWithAggregatesInput[]
    OR?: SeoSettingScalarWhereWithAggregatesInput[]
    NOT?: SeoSettingScalarWhereWithAggregatesInput | SeoSettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SeoSetting"> | number
    title?: StringWithAggregatesFilter<"SeoSetting"> | string
    description?: StringWithAggregatesFilter<"SeoSetting"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SeoSetting"> | Date | string
  }

  export type SiteSettingWhereInput = {
    AND?: SiteSettingWhereInput | SiteSettingWhereInput[]
    OR?: SiteSettingWhereInput[]
    NOT?: SiteSettingWhereInput | SiteSettingWhereInput[]
    id?: IntFilter<"SiteSetting"> | number
    gtmCode?: StringFilter<"SiteSetting"> | string
    updatedAt?: DateTimeFilter<"SiteSetting"> | Date | string
  }

  export type SiteSettingOrderByWithRelationInput = {
    id?: SortOrder
    gtmCode?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SiteSettingWhereInput | SiteSettingWhereInput[]
    OR?: SiteSettingWhereInput[]
    NOT?: SiteSettingWhereInput | SiteSettingWhereInput[]
    gtmCode?: StringFilter<"SiteSetting"> | string
    updatedAt?: DateTimeFilter<"SiteSetting"> | Date | string
  }, "id">

  export type SiteSettingOrderByWithAggregationInput = {
    id?: SortOrder
    gtmCode?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteSettingCountOrderByAggregateInput
    _avg?: SiteSettingAvgOrderByAggregateInput
    _max?: SiteSettingMaxOrderByAggregateInput
    _min?: SiteSettingMinOrderByAggregateInput
    _sum?: SiteSettingSumOrderByAggregateInput
  }

  export type SiteSettingScalarWhereWithAggregatesInput = {
    AND?: SiteSettingScalarWhereWithAggregatesInput | SiteSettingScalarWhereWithAggregatesInput[]
    OR?: SiteSettingScalarWhereWithAggregatesInput[]
    NOT?: SiteSettingScalarWhereWithAggregatesInput | SiteSettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SiteSetting"> | number
    gtmCode?: StringWithAggregatesFilter<"SiteSetting"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteSetting"> | Date | string
  }

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: IntFilter<"Car"> | number
    brand?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    capacity?: FloatFilter<"Car"> | number
    consumption?: FloatFilter<"Car"> | number
    wltpRange?: IntFilter<"Car"> | number
    isActive?: BoolFilter<"Car"> | boolean
    sortOrder?: IntFilter<"Car"> | number
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    capacity?: SortOrder
    consumption?: SortOrder
    wltpRange?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    brand_model?: CarBrandModelCompoundUniqueInput
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    brand?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    capacity?: FloatFilter<"Car"> | number
    consumption?: FloatFilter<"Car"> | number
    wltpRange?: IntFilter<"Car"> | number
    isActive?: BoolFilter<"Car"> | boolean
    sortOrder?: IntFilter<"Car"> | number
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
  }, "id" | "brand_model">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    capacity?: SortOrder
    consumption?: SortOrder
    wltpRange?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Car"> | number
    brand?: StringWithAggregatesFilter<"Car"> | string
    model?: StringWithAggregatesFilter<"Car"> | string
    capacity?: FloatWithAggregatesFilter<"Car"> | number
    consumption?: FloatWithAggregatesFilter<"Car"> | number
    wltpRange?: IntWithAggregatesFilter<"Car"> | number
    isActive?: BoolWithAggregatesFilter<"Car"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Car"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
  }

  export type StationOptionCreateInput = {
    socketType: string
    power: string
    priceAmount: number
    priceUnit: string
    brand: StationBrandCreateNestedOneWithoutOptionsInput
  }

  export type StationOptionUncheckedCreateInput = {
    id?: number
    socketType: string
    power: string
    priceAmount: number
    priceUnit: string
    brandId: number
  }

  export type StationOptionUpdateInput = {
    socketType?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    priceUnit?: StringFieldUpdateOperationsInput | string
    brand?: StationBrandUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type StationOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    socketType?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    priceUnit?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
  }

  export type StationOptionCreateManyInput = {
    id?: number
    socketType: string
    power: string
    priceAmount: number
    priceUnit: string
    brandId: number
  }

  export type StationOptionUpdateManyMutationInput = {
    socketType?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    priceUnit?: StringFieldUpdateOperationsInput | string
  }

  export type StationOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    socketType?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    priceUnit?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
  }

  export type StationBrandCreateInput = {
    name: string
    sourceUrl: string
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: StationOptionCreateNestedManyWithoutBrandInput
    createdBy?: UserCreateNestedOneWithoutBrandsInput
    approvals?: ApprovalCreateNestedManyWithoutBrandInput
  }

  export type StationBrandUncheckedCreateInput = {
    id?: number
    name: string
    sourceUrl: string
    createdById?: number | null
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: StationOptionUncheckedCreateNestedManyWithoutBrandInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutBrandInput
  }

  export type StationBrandUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: StationOptionUpdateManyWithoutBrandNestedInput
    createdBy?: UserUpdateOneWithoutBrandsNestedInput
    approvals?: ApprovalUpdateManyWithoutBrandNestedInput
  }

  export type StationBrandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: StationOptionUncheckedUpdateManyWithoutBrandNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type StationBrandCreateManyInput = {
    id?: number
    name: string
    sourceUrl: string
    createdById?: number | null
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StationBrandUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationBrandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    password: string
    isAdmin?: boolean
    brands?: StationBrandCreateNestedManyWithoutCreatedByInput
    approvalsGiven?: ApprovalCreateNestedManyWithoutApprovedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    isAdmin?: boolean
    brands?: StationBrandUncheckedCreateNestedManyWithoutCreatedByInput
    approvalsGiven?: ApprovalUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    brands?: StationBrandUpdateManyWithoutCreatedByNestedInput
    approvalsGiven?: ApprovalUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    brands?: StationBrandUncheckedUpdateManyWithoutCreatedByNestedInput
    approvalsGiven?: ApprovalUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    isAdmin?: boolean
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovalCreateInput = {
    approvedAt?: Date | string
    brand: StationBrandCreateNestedOneWithoutApprovalsInput
    approvedBy: UserCreateNestedOneWithoutApprovalsGivenInput
  }

  export type ApprovalUncheckedCreateInput = {
    id?: number
    brandId: number
    approvedById: number
    approvedAt?: Date | string
  }

  export type ApprovalUpdateInput = {
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: StationBrandUpdateOneRequiredWithoutApprovalsNestedInput
    approvedBy?: UserUpdateOneRequiredWithoutApprovalsGivenNestedInput
  }

  export type ApprovalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalCreateManyInput = {
    id?: number
    brandId: number
    approvedById: number
    approvedAt?: Date | string
  }

  export type ApprovalUpdateManyMutationInput = {
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoSettingCreateInput = {
    title: string
    description: string
    updatedAt?: Date | string
  }

  export type SeoSettingUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    updatedAt?: Date | string
  }

  export type SeoSettingUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoSettingCreateManyInput = {
    id?: number
    title: string
    description: string
    updatedAt?: Date | string
  }

  export type SeoSettingUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingCreateInput = {
    gtmCode: string
    updatedAt?: Date | string
  }

  export type SiteSettingUncheckedCreateInput = {
    id?: number
    gtmCode: string
    updatedAt?: Date | string
  }

  export type SiteSettingUpdateInput = {
    gtmCode?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gtmCode?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingCreateManyInput = {
    id?: number
    gtmCode: string
    updatedAt?: Date | string
  }

  export type SiteSettingUpdateManyMutationInput = {
    gtmCode?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gtmCode?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateInput = {
    brand: string
    model: string
    capacity: number
    consumption: number
    wltpRange: number
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUncheckedCreateInput = {
    id?: number
    brand: string
    model: string
    capacity: number
    consumption: number
    wltpRange: number
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    capacity?: FloatFieldUpdateOperationsInput | number
    consumption?: FloatFieldUpdateOperationsInput | number
    wltpRange?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    capacity?: FloatFieldUpdateOperationsInput | number
    consumption?: FloatFieldUpdateOperationsInput | number
    wltpRange?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateManyInput = {
    id?: number
    brand: string
    model: string
    capacity: number
    consumption: number
    wltpRange: number
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateManyMutationInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    capacity?: FloatFieldUpdateOperationsInput | number
    consumption?: FloatFieldUpdateOperationsInput | number
    wltpRange?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    capacity?: FloatFieldUpdateOperationsInput | number
    consumption?: FloatFieldUpdateOperationsInput | number
    wltpRange?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StationBrandScalarRelationFilter = {
    is?: StationBrandWhereInput
    isNot?: StationBrandWhereInput
  }

  export type StationOptionCountOrderByAggregateInput = {
    id?: SortOrder
    socketType?: SortOrder
    power?: SortOrder
    priceAmount?: SortOrder
    priceUnit?: SortOrder
    brandId?: SortOrder
  }

  export type StationOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    priceAmount?: SortOrder
    brandId?: SortOrder
  }

  export type StationOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    socketType?: SortOrder
    power?: SortOrder
    priceAmount?: SortOrder
    priceUnit?: SortOrder
    brandId?: SortOrder
  }

  export type StationOptionMinOrderByAggregateInput = {
    id?: SortOrder
    socketType?: SortOrder
    power?: SortOrder
    priceAmount?: SortOrder
    priceUnit?: SortOrder
    brandId?: SortOrder
  }

  export type StationOptionSumOrderByAggregateInput = {
    id?: SortOrder
    priceAmount?: SortOrder
    brandId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StationOptionListRelationFilter = {
    every?: StationOptionWhereInput
    some?: StationOptionWhereInput
    none?: StationOptionWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ApprovalListRelationFilter = {
    every?: ApprovalWhereInput
    some?: ApprovalWhereInput
    none?: ApprovalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StationOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApprovalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StationBrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sourceUrl?: SortOrder
    createdById?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StationBrandAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type StationBrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sourceUrl?: SortOrder
    createdById?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StationBrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sourceUrl?: SortOrder
    createdById?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StationBrandSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StationBrandListRelationFilter = {
    every?: StationBrandWhereInput
    some?: StationBrandWhereInput
    none?: StationBrandWhereInput
  }

  export type StationBrandOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ApprovalCountOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
  }

  export type ApprovalAvgOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    approvedById?: SortOrder
  }

  export type ApprovalMaxOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
  }

  export type ApprovalMinOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
  }

  export type ApprovalSumOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    approvedById?: SortOrder
  }

  export type SeoSettingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoSettingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SeoSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoSettingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoSettingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SiteSettingCountOrderByAggregateInput = {
    id?: SortOrder
    gtmCode?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SiteSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    gtmCode?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingMinOrderByAggregateInput = {
    id?: SortOrder
    gtmCode?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CarBrandModelCompoundUniqueInput = {
    brand: string
    model: string
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    capacity?: SortOrder
    consumption?: SortOrder
    wltpRange?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    consumption?: SortOrder
    wltpRange?: SortOrder
    sortOrder?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    capacity?: SortOrder
    consumption?: SortOrder
    wltpRange?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    capacity?: SortOrder
    consumption?: SortOrder
    wltpRange?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    consumption?: SortOrder
    wltpRange?: SortOrder
    sortOrder?: SortOrder
  }

  export type StationBrandCreateNestedOneWithoutOptionsInput = {
    create?: XOR<StationBrandCreateWithoutOptionsInput, StationBrandUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: StationBrandCreateOrConnectWithoutOptionsInput
    connect?: StationBrandWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StationBrandUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<StationBrandCreateWithoutOptionsInput, StationBrandUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: StationBrandCreateOrConnectWithoutOptionsInput
    upsert?: StationBrandUpsertWithoutOptionsInput
    connect?: StationBrandWhereUniqueInput
    update?: XOR<XOR<StationBrandUpdateToOneWithWhereWithoutOptionsInput, StationBrandUpdateWithoutOptionsInput>, StationBrandUncheckedUpdateWithoutOptionsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StationOptionCreateNestedManyWithoutBrandInput = {
    create?: XOR<StationOptionCreateWithoutBrandInput, StationOptionUncheckedCreateWithoutBrandInput> | StationOptionCreateWithoutBrandInput[] | StationOptionUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: StationOptionCreateOrConnectWithoutBrandInput | StationOptionCreateOrConnectWithoutBrandInput[]
    createMany?: StationOptionCreateManyBrandInputEnvelope
    connect?: StationOptionWhereUniqueInput | StationOptionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutBrandsInput = {
    create?: XOR<UserCreateWithoutBrandsInput, UserUncheckedCreateWithoutBrandsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBrandsInput
    connect?: UserWhereUniqueInput
  }

  export type ApprovalCreateNestedManyWithoutBrandInput = {
    create?: XOR<ApprovalCreateWithoutBrandInput, ApprovalUncheckedCreateWithoutBrandInput> | ApprovalCreateWithoutBrandInput[] | ApprovalUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutBrandInput | ApprovalCreateOrConnectWithoutBrandInput[]
    createMany?: ApprovalCreateManyBrandInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type StationOptionUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<StationOptionCreateWithoutBrandInput, StationOptionUncheckedCreateWithoutBrandInput> | StationOptionCreateWithoutBrandInput[] | StationOptionUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: StationOptionCreateOrConnectWithoutBrandInput | StationOptionCreateOrConnectWithoutBrandInput[]
    createMany?: StationOptionCreateManyBrandInputEnvelope
    connect?: StationOptionWhereUniqueInput | StationOptionWhereUniqueInput[]
  }

  export type ApprovalUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ApprovalCreateWithoutBrandInput, ApprovalUncheckedCreateWithoutBrandInput> | ApprovalCreateWithoutBrandInput[] | ApprovalUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutBrandInput | ApprovalCreateOrConnectWithoutBrandInput[]
    createMany?: ApprovalCreateManyBrandInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StationOptionUpdateManyWithoutBrandNestedInput = {
    create?: XOR<StationOptionCreateWithoutBrandInput, StationOptionUncheckedCreateWithoutBrandInput> | StationOptionCreateWithoutBrandInput[] | StationOptionUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: StationOptionCreateOrConnectWithoutBrandInput | StationOptionCreateOrConnectWithoutBrandInput[]
    upsert?: StationOptionUpsertWithWhereUniqueWithoutBrandInput | StationOptionUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: StationOptionCreateManyBrandInputEnvelope
    set?: StationOptionWhereUniqueInput | StationOptionWhereUniqueInput[]
    disconnect?: StationOptionWhereUniqueInput | StationOptionWhereUniqueInput[]
    delete?: StationOptionWhereUniqueInput | StationOptionWhereUniqueInput[]
    connect?: StationOptionWhereUniqueInput | StationOptionWhereUniqueInput[]
    update?: StationOptionUpdateWithWhereUniqueWithoutBrandInput | StationOptionUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: StationOptionUpdateManyWithWhereWithoutBrandInput | StationOptionUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: StationOptionScalarWhereInput | StationOptionScalarWhereInput[]
  }

  export type UserUpdateOneWithoutBrandsNestedInput = {
    create?: XOR<UserCreateWithoutBrandsInput, UserUncheckedCreateWithoutBrandsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBrandsInput
    upsert?: UserUpsertWithoutBrandsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBrandsInput, UserUpdateWithoutBrandsInput>, UserUncheckedUpdateWithoutBrandsInput>
  }

  export type ApprovalUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ApprovalCreateWithoutBrandInput, ApprovalUncheckedCreateWithoutBrandInput> | ApprovalCreateWithoutBrandInput[] | ApprovalUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutBrandInput | ApprovalCreateOrConnectWithoutBrandInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutBrandInput | ApprovalUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ApprovalCreateManyBrandInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutBrandInput | ApprovalUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutBrandInput | ApprovalUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StationOptionUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<StationOptionCreateWithoutBrandInput, StationOptionUncheckedCreateWithoutBrandInput> | StationOptionCreateWithoutBrandInput[] | StationOptionUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: StationOptionCreateOrConnectWithoutBrandInput | StationOptionCreateOrConnectWithoutBrandInput[]
    upsert?: StationOptionUpsertWithWhereUniqueWithoutBrandInput | StationOptionUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: StationOptionCreateManyBrandInputEnvelope
    set?: StationOptionWhereUniqueInput | StationOptionWhereUniqueInput[]
    disconnect?: StationOptionWhereUniqueInput | StationOptionWhereUniqueInput[]
    delete?: StationOptionWhereUniqueInput | StationOptionWhereUniqueInput[]
    connect?: StationOptionWhereUniqueInput | StationOptionWhereUniqueInput[]
    update?: StationOptionUpdateWithWhereUniqueWithoutBrandInput | StationOptionUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: StationOptionUpdateManyWithWhereWithoutBrandInput | StationOptionUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: StationOptionScalarWhereInput | StationOptionScalarWhereInput[]
  }

  export type ApprovalUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ApprovalCreateWithoutBrandInput, ApprovalUncheckedCreateWithoutBrandInput> | ApprovalCreateWithoutBrandInput[] | ApprovalUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutBrandInput | ApprovalCreateOrConnectWithoutBrandInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutBrandInput | ApprovalUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ApprovalCreateManyBrandInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutBrandInput | ApprovalUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutBrandInput | ApprovalUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type StationBrandCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<StationBrandCreateWithoutCreatedByInput, StationBrandUncheckedCreateWithoutCreatedByInput> | StationBrandCreateWithoutCreatedByInput[] | StationBrandUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: StationBrandCreateOrConnectWithoutCreatedByInput | StationBrandCreateOrConnectWithoutCreatedByInput[]
    createMany?: StationBrandCreateManyCreatedByInputEnvelope
    connect?: StationBrandWhereUniqueInput | StationBrandWhereUniqueInput[]
  }

  export type ApprovalCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<ApprovalCreateWithoutApprovedByInput, ApprovalUncheckedCreateWithoutApprovedByInput> | ApprovalCreateWithoutApprovedByInput[] | ApprovalUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutApprovedByInput | ApprovalCreateOrConnectWithoutApprovedByInput[]
    createMany?: ApprovalCreateManyApprovedByInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type StationBrandUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<StationBrandCreateWithoutCreatedByInput, StationBrandUncheckedCreateWithoutCreatedByInput> | StationBrandCreateWithoutCreatedByInput[] | StationBrandUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: StationBrandCreateOrConnectWithoutCreatedByInput | StationBrandCreateOrConnectWithoutCreatedByInput[]
    createMany?: StationBrandCreateManyCreatedByInputEnvelope
    connect?: StationBrandWhereUniqueInput | StationBrandWhereUniqueInput[]
  }

  export type ApprovalUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<ApprovalCreateWithoutApprovedByInput, ApprovalUncheckedCreateWithoutApprovedByInput> | ApprovalCreateWithoutApprovedByInput[] | ApprovalUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutApprovedByInput | ApprovalCreateOrConnectWithoutApprovedByInput[]
    createMany?: ApprovalCreateManyApprovedByInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StationBrandUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<StationBrandCreateWithoutCreatedByInput, StationBrandUncheckedCreateWithoutCreatedByInput> | StationBrandCreateWithoutCreatedByInput[] | StationBrandUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: StationBrandCreateOrConnectWithoutCreatedByInput | StationBrandCreateOrConnectWithoutCreatedByInput[]
    upsert?: StationBrandUpsertWithWhereUniqueWithoutCreatedByInput | StationBrandUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: StationBrandCreateManyCreatedByInputEnvelope
    set?: StationBrandWhereUniqueInput | StationBrandWhereUniqueInput[]
    disconnect?: StationBrandWhereUniqueInput | StationBrandWhereUniqueInput[]
    delete?: StationBrandWhereUniqueInput | StationBrandWhereUniqueInput[]
    connect?: StationBrandWhereUniqueInput | StationBrandWhereUniqueInput[]
    update?: StationBrandUpdateWithWhereUniqueWithoutCreatedByInput | StationBrandUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: StationBrandUpdateManyWithWhereWithoutCreatedByInput | StationBrandUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: StationBrandScalarWhereInput | StationBrandScalarWhereInput[]
  }

  export type ApprovalUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<ApprovalCreateWithoutApprovedByInput, ApprovalUncheckedCreateWithoutApprovedByInput> | ApprovalCreateWithoutApprovedByInput[] | ApprovalUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutApprovedByInput | ApprovalCreateOrConnectWithoutApprovedByInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutApprovedByInput | ApprovalUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: ApprovalCreateManyApprovedByInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutApprovedByInput | ApprovalUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutApprovedByInput | ApprovalUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type StationBrandUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<StationBrandCreateWithoutCreatedByInput, StationBrandUncheckedCreateWithoutCreatedByInput> | StationBrandCreateWithoutCreatedByInput[] | StationBrandUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: StationBrandCreateOrConnectWithoutCreatedByInput | StationBrandCreateOrConnectWithoutCreatedByInput[]
    upsert?: StationBrandUpsertWithWhereUniqueWithoutCreatedByInput | StationBrandUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: StationBrandCreateManyCreatedByInputEnvelope
    set?: StationBrandWhereUniqueInput | StationBrandWhereUniqueInput[]
    disconnect?: StationBrandWhereUniqueInput | StationBrandWhereUniqueInput[]
    delete?: StationBrandWhereUniqueInput | StationBrandWhereUniqueInput[]
    connect?: StationBrandWhereUniqueInput | StationBrandWhereUniqueInput[]
    update?: StationBrandUpdateWithWhereUniqueWithoutCreatedByInput | StationBrandUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: StationBrandUpdateManyWithWhereWithoutCreatedByInput | StationBrandUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: StationBrandScalarWhereInput | StationBrandScalarWhereInput[]
  }

  export type ApprovalUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<ApprovalCreateWithoutApprovedByInput, ApprovalUncheckedCreateWithoutApprovedByInput> | ApprovalCreateWithoutApprovedByInput[] | ApprovalUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutApprovedByInput | ApprovalCreateOrConnectWithoutApprovedByInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutApprovedByInput | ApprovalUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: ApprovalCreateManyApprovedByInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutApprovedByInput | ApprovalUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutApprovedByInput | ApprovalUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type StationBrandCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<StationBrandCreateWithoutApprovalsInput, StationBrandUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: StationBrandCreateOrConnectWithoutApprovalsInput
    connect?: StationBrandWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovalsGivenInput = {
    create?: XOR<UserCreateWithoutApprovalsGivenInput, UserUncheckedCreateWithoutApprovalsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type StationBrandUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: XOR<StationBrandCreateWithoutApprovalsInput, StationBrandUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: StationBrandCreateOrConnectWithoutApprovalsInput
    upsert?: StationBrandUpsertWithoutApprovalsInput
    connect?: StationBrandWhereUniqueInput
    update?: XOR<XOR<StationBrandUpdateToOneWithWhereWithoutApprovalsInput, StationBrandUpdateWithoutApprovalsInput>, StationBrandUncheckedUpdateWithoutApprovalsInput>
  }

  export type UserUpdateOneRequiredWithoutApprovalsGivenNestedInput = {
    create?: XOR<UserCreateWithoutApprovalsGivenInput, UserUncheckedCreateWithoutApprovalsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsGivenInput
    upsert?: UserUpsertWithoutApprovalsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovalsGivenInput, UserUpdateWithoutApprovalsGivenInput>, UserUncheckedUpdateWithoutApprovalsGivenInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StationBrandCreateWithoutOptionsInput = {
    name: string
    sourceUrl: string
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutBrandsInput
    approvals?: ApprovalCreateNestedManyWithoutBrandInput
  }

  export type StationBrandUncheckedCreateWithoutOptionsInput = {
    id?: number
    name: string
    sourceUrl: string
    createdById?: number | null
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    approvals?: ApprovalUncheckedCreateNestedManyWithoutBrandInput
  }

  export type StationBrandCreateOrConnectWithoutOptionsInput = {
    where: StationBrandWhereUniqueInput
    create: XOR<StationBrandCreateWithoutOptionsInput, StationBrandUncheckedCreateWithoutOptionsInput>
  }

  export type StationBrandUpsertWithoutOptionsInput = {
    update: XOR<StationBrandUpdateWithoutOptionsInput, StationBrandUncheckedUpdateWithoutOptionsInput>
    create: XOR<StationBrandCreateWithoutOptionsInput, StationBrandUncheckedCreateWithoutOptionsInput>
    where?: StationBrandWhereInput
  }

  export type StationBrandUpdateToOneWithWhereWithoutOptionsInput = {
    where?: StationBrandWhereInput
    data: XOR<StationBrandUpdateWithoutOptionsInput, StationBrandUncheckedUpdateWithoutOptionsInput>
  }

  export type StationBrandUpdateWithoutOptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutBrandsNestedInput
    approvals?: ApprovalUpdateManyWithoutBrandNestedInput
  }

  export type StationBrandUncheckedUpdateWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: ApprovalUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type StationOptionCreateWithoutBrandInput = {
    socketType: string
    power: string
    priceAmount: number
    priceUnit: string
  }

  export type StationOptionUncheckedCreateWithoutBrandInput = {
    id?: number
    socketType: string
    power: string
    priceAmount: number
    priceUnit: string
  }

  export type StationOptionCreateOrConnectWithoutBrandInput = {
    where: StationOptionWhereUniqueInput
    create: XOR<StationOptionCreateWithoutBrandInput, StationOptionUncheckedCreateWithoutBrandInput>
  }

  export type StationOptionCreateManyBrandInputEnvelope = {
    data: StationOptionCreateManyBrandInput | StationOptionCreateManyBrandInput[]
  }

  export type UserCreateWithoutBrandsInput = {
    email: string
    name?: string | null
    password: string
    isAdmin?: boolean
    approvalsGiven?: ApprovalCreateNestedManyWithoutApprovedByInput
  }

  export type UserUncheckedCreateWithoutBrandsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    isAdmin?: boolean
    approvalsGiven?: ApprovalUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UserCreateOrConnectWithoutBrandsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBrandsInput, UserUncheckedCreateWithoutBrandsInput>
  }

  export type ApprovalCreateWithoutBrandInput = {
    approvedAt?: Date | string
    approvedBy: UserCreateNestedOneWithoutApprovalsGivenInput
  }

  export type ApprovalUncheckedCreateWithoutBrandInput = {
    id?: number
    approvedById: number
    approvedAt?: Date | string
  }

  export type ApprovalCreateOrConnectWithoutBrandInput = {
    where: ApprovalWhereUniqueInput
    create: XOR<ApprovalCreateWithoutBrandInput, ApprovalUncheckedCreateWithoutBrandInput>
  }

  export type ApprovalCreateManyBrandInputEnvelope = {
    data: ApprovalCreateManyBrandInput | ApprovalCreateManyBrandInput[]
  }

  export type StationOptionUpsertWithWhereUniqueWithoutBrandInput = {
    where: StationOptionWhereUniqueInput
    update: XOR<StationOptionUpdateWithoutBrandInput, StationOptionUncheckedUpdateWithoutBrandInput>
    create: XOR<StationOptionCreateWithoutBrandInput, StationOptionUncheckedCreateWithoutBrandInput>
  }

  export type StationOptionUpdateWithWhereUniqueWithoutBrandInput = {
    where: StationOptionWhereUniqueInput
    data: XOR<StationOptionUpdateWithoutBrandInput, StationOptionUncheckedUpdateWithoutBrandInput>
  }

  export type StationOptionUpdateManyWithWhereWithoutBrandInput = {
    where: StationOptionScalarWhereInput
    data: XOR<StationOptionUpdateManyMutationInput, StationOptionUncheckedUpdateManyWithoutBrandInput>
  }

  export type StationOptionScalarWhereInput = {
    AND?: StationOptionScalarWhereInput | StationOptionScalarWhereInput[]
    OR?: StationOptionScalarWhereInput[]
    NOT?: StationOptionScalarWhereInput | StationOptionScalarWhereInput[]
    id?: IntFilter<"StationOption"> | number
    socketType?: StringFilter<"StationOption"> | string
    power?: StringFilter<"StationOption"> | string
    priceAmount?: FloatFilter<"StationOption"> | number
    priceUnit?: StringFilter<"StationOption"> | string
    brandId?: IntFilter<"StationOption"> | number
  }

  export type UserUpsertWithoutBrandsInput = {
    update: XOR<UserUpdateWithoutBrandsInput, UserUncheckedUpdateWithoutBrandsInput>
    create: XOR<UserCreateWithoutBrandsInput, UserUncheckedCreateWithoutBrandsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBrandsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBrandsInput, UserUncheckedUpdateWithoutBrandsInput>
  }

  export type UserUpdateWithoutBrandsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    approvalsGiven?: ApprovalUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBrandsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    approvalsGiven?: ApprovalUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type ApprovalUpsertWithWhereUniqueWithoutBrandInput = {
    where: ApprovalWhereUniqueInput
    update: XOR<ApprovalUpdateWithoutBrandInput, ApprovalUncheckedUpdateWithoutBrandInput>
    create: XOR<ApprovalCreateWithoutBrandInput, ApprovalUncheckedCreateWithoutBrandInput>
  }

  export type ApprovalUpdateWithWhereUniqueWithoutBrandInput = {
    where: ApprovalWhereUniqueInput
    data: XOR<ApprovalUpdateWithoutBrandInput, ApprovalUncheckedUpdateWithoutBrandInput>
  }

  export type ApprovalUpdateManyWithWhereWithoutBrandInput = {
    where: ApprovalScalarWhereInput
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyWithoutBrandInput>
  }

  export type ApprovalScalarWhereInput = {
    AND?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
    OR?: ApprovalScalarWhereInput[]
    NOT?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
    id?: IntFilter<"Approval"> | number
    brandId?: IntFilter<"Approval"> | number
    approvedById?: IntFilter<"Approval"> | number
    approvedAt?: DateTimeFilter<"Approval"> | Date | string
  }

  export type StationBrandCreateWithoutCreatedByInput = {
    name: string
    sourceUrl: string
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: StationOptionCreateNestedManyWithoutBrandInput
    approvals?: ApprovalCreateNestedManyWithoutBrandInput
  }

  export type StationBrandUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    sourceUrl: string
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: StationOptionUncheckedCreateNestedManyWithoutBrandInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutBrandInput
  }

  export type StationBrandCreateOrConnectWithoutCreatedByInput = {
    where: StationBrandWhereUniqueInput
    create: XOR<StationBrandCreateWithoutCreatedByInput, StationBrandUncheckedCreateWithoutCreatedByInput>
  }

  export type StationBrandCreateManyCreatedByInputEnvelope = {
    data: StationBrandCreateManyCreatedByInput | StationBrandCreateManyCreatedByInput[]
  }

  export type ApprovalCreateWithoutApprovedByInput = {
    approvedAt?: Date | string
    brand: StationBrandCreateNestedOneWithoutApprovalsInput
  }

  export type ApprovalUncheckedCreateWithoutApprovedByInput = {
    id?: number
    brandId: number
    approvedAt?: Date | string
  }

  export type ApprovalCreateOrConnectWithoutApprovedByInput = {
    where: ApprovalWhereUniqueInput
    create: XOR<ApprovalCreateWithoutApprovedByInput, ApprovalUncheckedCreateWithoutApprovedByInput>
  }

  export type ApprovalCreateManyApprovedByInputEnvelope = {
    data: ApprovalCreateManyApprovedByInput | ApprovalCreateManyApprovedByInput[]
  }

  export type StationBrandUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: StationBrandWhereUniqueInput
    update: XOR<StationBrandUpdateWithoutCreatedByInput, StationBrandUncheckedUpdateWithoutCreatedByInput>
    create: XOR<StationBrandCreateWithoutCreatedByInput, StationBrandUncheckedCreateWithoutCreatedByInput>
  }

  export type StationBrandUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: StationBrandWhereUniqueInput
    data: XOR<StationBrandUpdateWithoutCreatedByInput, StationBrandUncheckedUpdateWithoutCreatedByInput>
  }

  export type StationBrandUpdateManyWithWhereWithoutCreatedByInput = {
    where: StationBrandScalarWhereInput
    data: XOR<StationBrandUpdateManyMutationInput, StationBrandUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type StationBrandScalarWhereInput = {
    AND?: StationBrandScalarWhereInput | StationBrandScalarWhereInput[]
    OR?: StationBrandScalarWhereInput[]
    NOT?: StationBrandScalarWhereInput | StationBrandScalarWhereInput[]
    id?: IntFilter<"StationBrand"> | number
    name?: StringFilter<"StationBrand"> | string
    sourceUrl?: StringFilter<"StationBrand"> | string
    createdById?: IntNullableFilter<"StationBrand"> | number | null
    approved?: BoolFilter<"StationBrand"> | boolean
    createdAt?: DateTimeFilter<"StationBrand"> | Date | string
    updatedAt?: DateTimeFilter<"StationBrand"> | Date | string
  }

  export type ApprovalUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: ApprovalWhereUniqueInput
    update: XOR<ApprovalUpdateWithoutApprovedByInput, ApprovalUncheckedUpdateWithoutApprovedByInput>
    create: XOR<ApprovalCreateWithoutApprovedByInput, ApprovalUncheckedCreateWithoutApprovedByInput>
  }

  export type ApprovalUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: ApprovalWhereUniqueInput
    data: XOR<ApprovalUpdateWithoutApprovedByInput, ApprovalUncheckedUpdateWithoutApprovedByInput>
  }

  export type ApprovalUpdateManyWithWhereWithoutApprovedByInput = {
    where: ApprovalScalarWhereInput
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyWithoutApprovedByInput>
  }

  export type StationBrandCreateWithoutApprovalsInput = {
    name: string
    sourceUrl: string
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: StationOptionCreateNestedManyWithoutBrandInput
    createdBy?: UserCreateNestedOneWithoutBrandsInput
  }

  export type StationBrandUncheckedCreateWithoutApprovalsInput = {
    id?: number
    name: string
    sourceUrl: string
    createdById?: number | null
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: StationOptionUncheckedCreateNestedManyWithoutBrandInput
  }

  export type StationBrandCreateOrConnectWithoutApprovalsInput = {
    where: StationBrandWhereUniqueInput
    create: XOR<StationBrandCreateWithoutApprovalsInput, StationBrandUncheckedCreateWithoutApprovalsInput>
  }

  export type UserCreateWithoutApprovalsGivenInput = {
    email: string
    name?: string | null
    password: string
    isAdmin?: boolean
    brands?: StationBrandCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutApprovalsGivenInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    isAdmin?: boolean
    brands?: StationBrandUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutApprovalsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovalsGivenInput, UserUncheckedCreateWithoutApprovalsGivenInput>
  }

  export type StationBrandUpsertWithoutApprovalsInput = {
    update: XOR<StationBrandUpdateWithoutApprovalsInput, StationBrandUncheckedUpdateWithoutApprovalsInput>
    create: XOR<StationBrandCreateWithoutApprovalsInput, StationBrandUncheckedCreateWithoutApprovalsInput>
    where?: StationBrandWhereInput
  }

  export type StationBrandUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: StationBrandWhereInput
    data: XOR<StationBrandUpdateWithoutApprovalsInput, StationBrandUncheckedUpdateWithoutApprovalsInput>
  }

  export type StationBrandUpdateWithoutApprovalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: StationOptionUpdateManyWithoutBrandNestedInput
    createdBy?: UserUpdateOneWithoutBrandsNestedInput
  }

  export type StationBrandUncheckedUpdateWithoutApprovalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: StationOptionUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type UserUpsertWithoutApprovalsGivenInput = {
    update: XOR<UserUpdateWithoutApprovalsGivenInput, UserUncheckedUpdateWithoutApprovalsGivenInput>
    create: XOR<UserCreateWithoutApprovalsGivenInput, UserUncheckedCreateWithoutApprovalsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovalsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovalsGivenInput, UserUncheckedUpdateWithoutApprovalsGivenInput>
  }

  export type UserUpdateWithoutApprovalsGivenInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    brands?: StationBrandUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovalsGivenInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    brands?: StationBrandUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type StationOptionCreateManyBrandInput = {
    id?: number
    socketType: string
    power: string
    priceAmount: number
    priceUnit: string
  }

  export type ApprovalCreateManyBrandInput = {
    id?: number
    approvedById: number
    approvedAt?: Date | string
  }

  export type StationOptionUpdateWithoutBrandInput = {
    socketType?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    priceUnit?: StringFieldUpdateOperationsInput | string
  }

  export type StationOptionUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    socketType?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    priceUnit?: StringFieldUpdateOperationsInput | string
  }

  export type StationOptionUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    socketType?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    priceUnit?: StringFieldUpdateOperationsInput | string
  }

  export type ApprovalUpdateWithoutBrandInput = {
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedBy?: UserUpdateOneRequiredWithoutApprovalsGivenNestedInput
  }

  export type ApprovalUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationBrandCreateManyCreatedByInput = {
    id?: number
    name: string
    sourceUrl: string
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApprovalCreateManyApprovedByInput = {
    id?: number
    brandId: number
    approvedAt?: Date | string
  }

  export type StationBrandUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: StationOptionUpdateManyWithoutBrandNestedInput
    approvals?: ApprovalUpdateManyWithoutBrandNestedInput
  }

  export type StationBrandUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: StationOptionUncheckedUpdateManyWithoutBrandNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type StationBrandUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUpdateWithoutApprovedByInput = {
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: StationBrandUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type ApprovalUncheckedUpdateWithoutApprovedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUncheckedUpdateManyWithoutApprovedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}