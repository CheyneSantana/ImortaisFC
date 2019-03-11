using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Imortais.Migrations
{
    public partial class inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "elenco",
                columns: table => new
                {
                    elencoId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    nome = table.Column<string>(nullable: false),
                    posicao = table.Column<string>(nullable: false),
                    img = table.Column<string>(nullable: false),
                    gols = table.Column<int>(nullable: false),
                    assistencias = table.Column<int>(nullable: false),
                    dtContratacao = table.Column<DateTime>(nullable: false),
                    cv = table.Column<int>(nullable: false),
                    ca = table.Column<int>(nullable: false),
                    ativo = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_elenco", x => x.elencoId);
                });

            migrationBuilder.CreateTable(
                name: "eventos",
                columns: table => new
                {
                    EventoID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DescricaoEvento = table.Column<string>(nullable: true),
                    DataEvento = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_eventos", x => x.EventoID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "elenco");

            migrationBuilder.DropTable(
                name: "eventos");
        }
    }
}
