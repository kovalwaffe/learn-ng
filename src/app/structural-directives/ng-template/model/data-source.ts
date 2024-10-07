export interface DataSource {
  data: string[];

  load(): Promise<string[]>
}
