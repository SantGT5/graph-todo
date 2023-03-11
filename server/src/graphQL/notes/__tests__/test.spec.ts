import { describe, it } from 'vitest';

import request from 'supertest';

import {
    APOLLO_SERVER,
    GetAllNotes,
    AddNewNote,
    DeleteNote,
} from '../../../utils/test/operation.query';

describe('Notes GraphQL', () => {
    // ToDo: create EndPoint to add multiple notes at once
    afterAll(async () => {
        const { body } = await request(APOLLO_SERVER)
            .post('/graphql')
            .send(GetAllNotes);

        // ToDo: create a EndPoint to delete all notes
        body.data.getAllNotes.forEach(async ({ _id }: { _id: string }) => {
            await request(APOLLO_SERVER).post('/graphql').send(DeleteNote(_id));
        });
    });

    it('should AddNewNote', async () => {
        const { body, statusCode, error, ok } = await request(APOLLO_SERVER)
            .post('/graphql')
            .send(AddNewNote('My title', 'My text'));

        expect(body.data).toHaveProperty('addNewNote');
        expect(statusCode).toBe(200);
        expect(ok).toBeTruthy();
        expect(error).toBeFalsy();
    });

    it('should GetAllNotes', async () => {
        const { body, statusCode, error, ok } = await request(APOLLO_SERVER)
            .post('/graphql')
            .send(GetAllNotes);

        expect(body.data).toHaveProperty('getAllNotes');
        expect(body.data.getAllNotes[0].text).toEqual('My text');
        expect(body.data.getAllNotes[0].title).toEqual('My title');

        expect(statusCode).toBe(200);
        expect(ok).toBeTruthy();
        expect(error).toBeFalsy();
    });
});
