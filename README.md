# tailwindcss_curso

Curso de TailwindCSS

1. Dar inicio ao container do docker

    ```
    docker-compose start
    ```

2. Rodar comando para entrar no container

    ```
    docker exec -it tailwindcss_container bash
    ```

3. Rodar comando para rodar servidor localhost:9000

    ```
    npm run dev
    ```

4. Rodar comando para entrar no container

    ```
    docker exec -it tailwindcss_container bash
    ```

5. Editar arquivo package.json para apontar para a pasta de saida do css

6. Rodar comando para ficar alterando arquivo de saida do css

    ```
    npm run watch
    ```

7. Para o container do docker

    ```
    docker-compose stop
    ```

8. Adicionar itens alterado ao GIT

    ```
    git add .
    ```

9. Comitar os itens que foram adicionarod

    ```
    git commit -m "Mensagem do commit"
    ```

10. Comitar os itens que foram adicionarod
    ```
    git push origin main:main
    ```
