export default defineEventHandler(async (event) => {
    const session = await authService.getSession(event)
    if (!session?.user)
      throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })

    const { projectData, html, css, js } = await readBody<{ projectData: any[], html:string, css:string, js:string }>(event)
    if (!projectData || !html || !css || !js)
        throw createError({ statusCode: 400, statusMessage: 'Bad Request' })

    const builder = await pageService.create(projectData, html, css, js); 

    return { builder }
})