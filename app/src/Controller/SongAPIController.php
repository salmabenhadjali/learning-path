<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SongAPIController extends AbstractController
{
    #[Route('/api/song/{id<\d+>}', methods: ['GET'])]
    public function getSong(int $id): Response
    {
        //TODO query the database
        $song = [
            'id' => $id,
            'name' => 'Waterfalls',
            'url' => 'https://symfonycasts.s3.amazonaws.com/sample.mp3',
        ];

        // return new JsonResponse($song);
        return $this->json($song);
    }
}
